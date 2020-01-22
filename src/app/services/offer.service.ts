import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Offer } from "../interfaces/offer";
import { WhereIs } from "../interfaces/where-is";
import { HowToUse } from "../interfaces/how-to-use";
import { map } from "rxjs/operators";

@Injectable()
export class OfferService {
	constructor(private http: HttpClient) {}

	public getOfferById(id: number): Observable<Offer> {
		return this.http
			.get<Offer[]>(`listOffer?id=${id}`)
			.pipe(map((listOffer: Offer[]) => listOffer.shift()));
	}

	public getWhereIsOfferById(id: number): Observable<WhereIs> {
		return this.http.get<WhereIs>(`where-is?offer_id=${id}`);
	}

	public getHowToUseOfferById(id: number): Observable<HowToUse> {
		return this.http.get<HowToUse>(`how-to-use?offer_id=${id}`);
	}

	public getListOffer(): Observable<Array<Offer>> {
		const options = { params: new HttpParams().set("spotlight", "true") };

		return this.http.get<Offer[]>("listOffer", options);
	}

	public getOfferByCategory(category: string): Observable<Array<Offer>> {
		return this.http.get<Offer[]>(`listOffer?category=${category}`);
	}

	public getOffer(value: string): Observable<Offer[]> {
		return this.http.get<Offer[]>(`listOffer?description_like=${value}`);
	}
}
