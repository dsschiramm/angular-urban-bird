import { Component, OnInit } from '@angular/core';
import { OfferService } from "../../services/offer.service";
import { Observable, Subject } from 'rxjs';
import { Offer } from '../../models/offer.model';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
	selector: 'app-top',              
	templateUrl: './top.component.html',
	styleUrls: ['./top.component.css'],
	providers: [OfferService]
})
export class TopComponent implements OnInit {
	
	public listOffer: Observable<Offer[]>;
	private subjectSearch: Subject<string> = new Subject<string>();
	
	constructor(private offerService: OfferService) { }
	
	ngOnInit() {

		this.listOffer = this.subjectSearch.debounceTime(1000).distinctUntilChanged()
		.switchMap((value: string) => {

			if (value.trim() === '') {
				return Observable.of<Offer[]>([]);
			}

			return this.offerService.getOffer(value);

		}).catch((error: any) => {
			
			console.log('Error: ', error);
			return Observable.of<Offer[]>([]);
		});
	}
	
	public searchOffer(value: string): void {
		this.subjectSearch.next(value);
	}
	
	public cleanSearch(): void {
		this.subjectSearch.next('');
	}
}
