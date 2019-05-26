import { CarrierItem } from '../models/carrier-item.model';

export class Order {

	constructor(
		public id: number,
		public address: string,
		public numeral: string,
		public complement: string,
		public paymentForm: string,
		public items: CarrierItem[]
	) { }
}