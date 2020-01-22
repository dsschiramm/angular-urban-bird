import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OfferService } from "../../../services/offer.service";
import { take } from "rxjs/operators";
import { HowToUse } from "../../../interfaces/how-to-use";

@Component({
	selector: "app-how-to-use",
	templateUrl: "./how-to-use.component.html",
	styleUrls: ["./how-to-use.component.css"],
	providers: [OfferService]
})
export class HowToUseComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private offerService: OfferService
	) {}

	public howToUse: HowToUse = {
		offer_id: null,
		description: ""
	};

	ngOnInit() {
		this.route.parent.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService
				.getWhereIsOfferById(params.id)
				.pipe(take(1))
				.subscribe((howToUse: HowToUse) => (this.howToUse = howToUse));
		});
	}
}
