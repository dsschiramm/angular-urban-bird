import { Component, OnInit } from "@angular/core";
import { OfferService } from "../../services/offer.service";
import { Offer } from "../../interfaces/offer";
import { take } from "rxjs/operators";

@Component({
	selector: "app-fun",
	templateUrl: "./fun.component.html",
	styleUrls: ["./fun.component.css"],
	providers: [OfferService]
})
export class FunComponent implements OnInit {
	constructor(private offerService: OfferService) {}

	public listOffer: Array<Offer>;

	ngOnInit() {
		this.offerService
			.getOfferByCategory("diversao")
			.pipe(take(1))
			.subscribe((listOffer: Array<Offer>) => {
				this.listOffer = listOffer;
			});
	}
}
