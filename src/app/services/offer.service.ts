import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Offer } from "../interfaces/offer";
import { WhereIs } from "../interfaces/where-is";
import { HowToUse } from "../interfaces/how-to-use";

@Injectable()
export class OfferService {
	constructor(private http: HttpClient) {}

	public getOfferList(): Observable<Offer[]> {
		const options = { params: new HttpParams().set("spotlight", "true") };

		return this.http.get<Offer[]>("offer/", options);
	}

	public getOfferByCategory(category: string): Observable<Array<Offer>> {
		const options = { params: new HttpParams().set("category", category) };

		return this.http.get<Offer[]>("offer/", options);
	}

	public getOfferById(id: number): Observable<Offer> {
		return this.http.get<Offer>(`offer/${id}`);
	}

	public getWhereIsByOfferId(id: number): Observable<WhereIs[]> {
		return this.http.get<WhereIs[]>(`where-is?offer_id=${id}`);
	}

	public getHowToUseByOfferId(id: number): Observable<HowToUse[]> {
		return this.http.get<HowToUse[]>(`how-to-use?offer_id=${id}`);
	}
}
