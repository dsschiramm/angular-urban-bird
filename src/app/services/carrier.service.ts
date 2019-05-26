import { Injectable } from "@angular/core";
import { CarrierItem } from '../models/carrier-item.model';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
class CarrierService {

	public items: CarrierItem[] = [];

	public getItems(): CarrierItem[] {
		return this.items;
	}

	public addItem(offer: Offer): void {

		let itemCarrier: CarrierItem = new CarrierItem(
			offer.id,
			offer.images[0],
			offer.title,
			offer.description,
			offer.value,
			1
		);

		let itemCarrierFound = this.items.find((item: CarrierItem) => item.id === itemCarrier.id);

		if (itemCarrierFound) {
			itemCarrierFound.quantity++;
		} else {
			this.items.push(itemCarrier);
		}
	}

	public getTotalValueCarried(): number {

		let total: number = 0;

		this.items.map((item: CarrierItem) => {
			total = total + (item.value * item.quantity);
		});

		return total;
	}

	public addQuantity(itemCarrier: CarrierItem): void {

		let itemCarrierFound = this.items.find((item: CarrierItem) => item.id === itemCarrier.id);

		if (itemCarrierFound) {
			itemCarrierFound.quantity++;
		}
	}

	public subtractQuantity(itemCarrier: CarrierItem): void {

		let itemCarrierFound = this.items.find((item: CarrierItem) => item.id === itemCarrier.id);

		if (itemCarrierFound) {
			itemCarrierFound.quantity--;

			if (itemCarrierFound.quantity === 0) {
				this.items.splice(this.items.indexOf(itemCarrierFound), 1);
			}
		}
	}

	public cleanCarrier(): void {
		this.items = [];
	}
}

export { CarrierService }