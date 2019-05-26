import { Injectable } from "@angular/core";
import { Order } from "../models/order.model";
import { Observable } from 'rxjs';
import { HttpClient as HttpService } from '@angular/common/http';
import { NotificationService } from "../services/notification.service"

@Injectable()
export class PurchaseService {

	constructor(private httpService: HttpService, private notificationService: NotificationService) {}

	public confirm(order: Order): Observable<Order> {
		let respond = this.httpService.post<Order>('order', order);
		this.notificationService.showSuccess('Compra realizada com sucesso!', 'Sucesso');
		return respond;
	}
}