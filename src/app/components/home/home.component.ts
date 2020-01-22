import { Component, OnInit } from "@angular/core";
import { OfferService } from "../../services/offer.service";
import { Offer } from "../../interfaces/offer";
import { take } from "rxjs/operators";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	providers: [OfferService]
})
export class HomeComponent implements OnInit {
	constructor(private offerService: OfferService) {}

	public title = "Promoções do dia!";
	public subTitle = "Aproveite as super ofertas que nós temos para você!";
	public listOffer: Offer[];

	ngOnInit() {
		this.offerService
			.getListOffer()
			.pipe(take(1))
			.subscribe((listOffer: Offer[]) => (this.listOffer = listOffer));
	}
}
