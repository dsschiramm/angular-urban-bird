export interface Offer {
	id: number;
	category: string;
	title: string;
	description: string;
	advertiser: string;
	value: number;
	spotlight: boolean;
	images: Array<object>;
}
