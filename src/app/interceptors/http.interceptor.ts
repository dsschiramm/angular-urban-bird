import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app.constants';
import { camelCase, mapKeys } from "lodash";
import { map, catchError, retry, tap, finalize } from 'rxjs/operators';
import { LoaderService } from "../services/loader.service";
import { NotificationService } from "../services/notification.service"
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

	constructor(private loaderService: LoaderService, private notificationService: NotificationService) { }
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		this.showLoader();
		
		request = request.clone({ url: request.url.replace("http://", "https://") });
		
		if (!request.headers.has('Content-Type')) {
			request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
		}
		
		request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
		
		request = request.clone({ headers: request.headers.set('Cache-Control', 'public, max-age=31536000') });

		const token: string = localStorage.getItem('token');

		if (!token) {
			request = request.clone({ headers: request.headers.set('Authorization', 'Basic YWxhZGRpbjpvcGVuc2VzYW1l') });
		} else {
			request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
		}
		
		request = request.clone({ url: this.formUrl(request.url) });

		return next.handle(request).pipe(
			retry(3),
			catchError((error: HttpErrorResponse) => this.errorHandler(error)),
			map((event: HttpEvent<any>) => this.convertCamelCaseBodyResponse(event)),
			finalize(() => this.hideLoader())
		);
	}

	private errorHandler(error: HttpErrorResponse): any {
		this.notificationService.showError('Servidor indisponível.', 'Error');
		this.hideLoader();
		return throwError(error);
	}

	private formUrl(url: string): string {
		return `${URL_API}/${url}`;
	}

	private showLoader() :void {
		this.loaderService.isLoading.next(true);
	}

	private hideLoader(): void {
		this.loaderService.isLoading.next(false);
	}

	private convertCamelCaseBodyResponse(event: HttpEvent<any>): HttpEvent<any> {

		if (event instanceof HttpResponse) {
			let camelCaseObject = [];

			if (event.body instanceof Array) {

				event.body.forEach((item) => {
					camelCaseObject.push(mapKeys(item, (v, k) => camelCase(k)))
				});
			} else {
				camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
			}

			const modEvent = event.clone({ body: camelCaseObject });
		
			return modEvent;
		}
	}
}
