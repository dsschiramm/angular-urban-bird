import { Component, OnInit } from "@angular/core";
import { OfferService } from "../../services/offer.service";
import { Offer } from "../../interfaces/offer";
import { take } from "rxjs/operators";

@Component({
	selector: "app-restaurant",
	templateUrl: "./restaurant.component.html",
	styleUrls: ["./restaurant.component.css"],
	providers: [OfferService]
})
export class RestaurantComponent implements OnInit {
	constructor(private offerService: OfferService) {}

	public listOffer: Array<Offer>;

	ngOnInit() {
		this.offerService
			.getOfferByCategory("restaurante")
			.pipe(take(1))
			.subscribe((listOffer: Array<Offer>) => {
				this.listOffer = listOffer;
			});
	}
}
