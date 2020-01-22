import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OfferService } from "../../../services/offer.service";
import { take } from "rxjs/operators";
import { WhereIs } from "../../../interfaces/where-is";

@Component({
	selector: "app-where-is",
	templateUrl: "./where-is.component.html",
	styleUrls: ["./where-is.component.css"],
	providers: [OfferService]
})
export class WhereIsComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private offerService: OfferService
	) {}

	public whereIs: WhereIs = {
		offer_id: null,
		description: ""
	};

	ngOnInit() {
		this.route.parent.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService
				.getWhereIsOfferById(params.id)
				.pipe(take(1))
				.subscribe((whereIs: WhereIs) => {
					console.log("whereIs ", whereIs);
					this.whereIs = whereIs;
				});
		});
	}
}
