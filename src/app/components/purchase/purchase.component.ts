import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../../models/order.model'
import { CarrierItem } from '../../models/carrier-item.model';
import { CarrierService } from "../../services/carrier.service";
import { PurchaseService } from '../../services/purchase.service';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-purchase',
	templateUrl: './purchase.component.html',
	styleUrls: ['./purchase.component.css'],
	providers: [PurchaseService]
})
export class PurchaseComponent implements OnInit {
	
	public idOrder: number;
	public items: CarrierItem[] = [];
	
	public formulary: FormGroup = new FormGroup({
		'address': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
		'numeral': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
		'complement': new FormControl(null),
		'paymentForm': new FormControl(null, [Validators.required])
	});
	
	constructor(private purchaseService: PurchaseService, private carrierService: CarrierService) { }
	
	ngOnInit() {
		this.items = this.carrierService.getItems();
	}
	
	public confirm(): void {

		if (this.formulary.status === 'INVALID') {
			
			this.formulary.get('address').markAsTouched()
			this.formulary.get('numeral').markAsTouched()
			this.formulary.get('complement').markAsTouched()
			this.formulary.get('paymentForm').markAsTouched()
			
		} else {

			if (!this.carrierService.getItems().length) {

				alert('Não há itens no carrinho para realizar a compra.');

			} else {

				let order: Order = new Order(
					null,
					this.formulary.value.address, 
					this.formulary.value.numeral, 
					this.formulary.value.complement, 
					this.formulary.value.paymentForm,
					this.carrierService.getItems());

				this.purchaseService.confirm(order).pipe(take(1)).subscribe((order: Order) => {
					this.idOrder = order.id;
					this.carrierService.cleanCarrier();
				});
			}
		}
	}

	public getTotalValueCarried(): number {
		return this.carrierService.getTotalValueCarried();
	}

	public addQuantity(item: CarrierItem): void {
		this.carrierService.addQuantity(item);
	}

	public subtractQuantity(item: CarrierItem): void {
		this.carrierService.subtractQuantity(item);
	}
}
