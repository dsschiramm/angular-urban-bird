import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { take } from "rxjs/operators";
import { Offer } from "../../interfaces/offer";
import { OfferService } from "../../services/offer.service";
import { CarrierService } from "../../services/carrier.service";

@Component({
	selector: "app-offer",
	templateUrl: "./offer.component.html",
	styleUrls: ["./offer.component.css"],
	providers: [OfferService]
})
export class OfferComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private offerService: OfferService,
		private carrierService: CarrierService
	) {}

	public offer: Offer;

	ngOnInit() {
		this.route.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService
				.getOfferById(params.id)
				.pipe(take(1))
				.subscribe((offer: Offer) => (this.offer = offer));
		});
	}

	public addItemToCarrier(): void {
		this.carrierService.addItem(this.offer);
	}
}
