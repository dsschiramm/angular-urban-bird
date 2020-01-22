import { CarrierItem } from "./carrier-item";

export interface Order {
	id: number;
	address: string;
	numeral: string;
	complement: string;
	paymentForm: string;
	items: CarrierItem[];
}
