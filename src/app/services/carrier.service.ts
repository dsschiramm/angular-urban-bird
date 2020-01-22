import { Injectable } from "@angular/core";
import { CarrierItem } from "../interfaces/carrier-item";
import { Offer } from "../interfaces/offer";

@Injectable({
	providedIn: "root"
})
export class CarrierService {
	public items: CarrierItem[] = [];

	public getItems(): CarrierItem[] {
		return this.items;
	}

	public addItem(offer: Offer): void {
		let itemCarrier: CarrierItem = {
			id: offer.id,
			image: offer.images[0],
			title: offer.title,
			description: offer.description,
			value: offer.value,
			quantity: 1
		};

		let itemCarrierFound = this.items.find(
			(item: CarrierItem) => item.id === itemCarrier.id
		);

		if (itemCarrierFound) {
			itemCarrierFound.quantity++;
		} else {
			this.items.push(itemCarrier);
		}
	}

	public getTotalValueCarried(): number {
		let total: number = 0;

		this.items.map((item: CarrierItem) => {
			total = total + item.value * item.quantity;
		});

		return total;
	}

	public addQuantity(itemCarrier: CarrierItem): void {
		let itemCarrierFound = this.items.find(
			(item: CarrierItem) => item.id === itemCarrier.id
		);

		if (itemCarrierFound) {
			itemCarrierFound.quantity++;
		}
	}

	public subtractQuantity(itemCarrier: CarrierItem): void {
		let itemCarrierFound = this.items.find(
			(item: CarrierItem) => item.id === itemCarrier.id
		);

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
