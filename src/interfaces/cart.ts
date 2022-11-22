import { ISize } from './';

export type Gender = 'men' | 'women' | 'boys' | 'girls';

export interface ICartProduct {
	_id: string;
	image: string;
	price: number;
	size?: ISize;
	slug: string;
	title: string;
	gender: Gender;
	quantity: number;
}
