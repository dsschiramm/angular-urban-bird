import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer.model';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-restaurant',
	templateUrl: './restaurant.component.html',
	styleUrls: ['./restaurant.component.css'],
	providers: [OfferService]
})
export class RestaurantComponent implements OnInit {
	
	public listOffer: Array<Offer>;
	
	constructor(private offerService: OfferService) { }
	
	ngOnInit() {

		this.offerService.getOfferByCategory('restaurante').pipe(take(1)).subscribe((listOffer: Array<Offer>) => {
			this.listOffer = listOffer;
		});
	}
}
