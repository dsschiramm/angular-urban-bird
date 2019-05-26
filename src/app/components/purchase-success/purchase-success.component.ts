import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-purchase-success',
	templateUrl: './purchase-success.component.html',
	styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent {
	
	@Input() public idOrder: number;
	
	constructor() { }
}
