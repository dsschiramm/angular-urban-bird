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

	public whereIsList: WhereIs[];

	ngOnInit() {
		this.route.parent.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService
				.getWhereIsByOfferId(params.id)
				.pipe(take(1))
				.subscribe(
					(whereIsList: WhereIs[]) => (this.whereIsList = whereIsList)
				);
		});
	}
}
