export interface ShippingAddress {
	firstName: string;
	lastName: string;
	address: string;
	zip: string;
	city: string;
	state?: string | undefined;
	country: string;
	code: string;
	phone: string;
}
