import { Component, Input } from "@angular/core";

@Component({
	selector: "app-purchase-success",
	templateUrl: "./purchase-success.component.html",
	styleUrls: ["./purchase-success.component.css"]
})
export class PurchaseSuccessComponent {
	constructor() {}

	@Input() public idOrder: number;
}
