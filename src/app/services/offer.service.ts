import { Offer } from '../models/offer.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient as HttpService } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OfferService {

	constructor(private httpService: HttpService) { }

	public getOfferById(id: number): Observable<Offer> {
		return this.httpService.get<Offer[]>(`listOffer?id=${id}`).map((listOffer: Offer[]) => listOffer.shift());
	}

	public getWhereIsOfferById(id: number): Observable<string> {
		return this.httpService.get<string>(`where-is?offer_id=${id}`).map((whereIs: any) => whereIs.shift().description);
	}

	public getHowToUseOfferById(id: number): Observable<string> {
		return this.httpService.get<string>(`how-to-use?offer_id=${id}`).map((whereIs: any) => whereIs.shift().description);
	}

	public getListOffer(): Observable<Array<Offer>> {
		return this.httpService.get<Array<Offer>>('listOffer?spotlight=true');
	}

	public getOfferByCategory(category: string): Observable<Array<Offer>> {
		return this.httpService.get<Array<Offer>>(`listOffer?category=${category}`);
	}

	public getOffer(value: string): Observable<Offer[]> {
		return this.httpService.get<Offer[]>(`listOffer?description_like=${value}`);
	}
}
