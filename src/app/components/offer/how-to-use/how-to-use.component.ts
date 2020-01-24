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

	public howToUseList: HowToUse[];

	ngOnInit() {
		this.route.parent.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService
				.getHowToUseByOfferId(params.id)
				.pipe(take(1))
				.subscribe(
					(howToUseList: HowToUse[]) =>
						(this.howToUseList = howToUseList)
				);
		});
	}
}
