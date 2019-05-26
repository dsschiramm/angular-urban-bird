import { Component, OnInit  } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer.model';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-fun',
	templateUrl: './fun.component.html',
	styleUrls: ['./fun.component.css'],
	providers: [OfferService]
})
export class FunComponent implements OnInit {

	public listOffer: Array<Offer>;

	constructor(private offerService: OfferService) { }

	ngOnInit() {

		this.offerService.getOfferByCategory('diversao').pipe(take(1)).subscribe((listOffer: Array<Offer>) => {
			this.listOffer = listOffer;
		});
	}
}
