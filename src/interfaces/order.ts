import { ShippingAddress } from './address';
import { ISize } from './products';
import { IUser } from './user';

export interface IOrder {
	_id?: string;
	user?: string | IUser;
	orderItems: IOrderItem[];
	shippingAddress: ShippingAddress;
	paymentResult?: string;
	numberOfItems: number;
	subTotal: number;
	tax: number;
	total: number;
	isPaid: boolean;
	paidAt?: string;
	transactionId?: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface IOrderItem {
	_id: string;
	title: string;
	size: ISize;
	quantity: number;
	slug: string;
	image: string;
	price: number;
	gender: string;
}
