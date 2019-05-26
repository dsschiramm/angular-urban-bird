import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer.model';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [OfferService]
})
export class HomeComponent implements OnInit {

	public title = 'Promoções do dia!';
	public subTitle = 'Aproveite as super ofertas que nós temos para você!';
	public listOffer: Array<Offer>;

	constructor(private offerService: OfferService) { }

	ngOnInit() {

		this.offerService.getListOffer().pipe(take(1)).subscribe((listOffer: Array<Offer>) => {
			this.listOffer = listOffer;
		});
	}
}
