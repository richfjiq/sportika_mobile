import { View } from 'react-native';
import { ICartProduct, ISize } from '../../interfaces';
import { useCart } from '../../store';
import { ProductCart } from '../ProductCart';
import { styles } from './CartProducts.style';

interface Props {
	cart: ICartProduct[];
	checkout?: boolean;
}

const CartProducts = ({ cart, checkout = false }: Props) => {
	const { updateCartQuantity } = useCart();

	const onUpdateProductQuantity = (product: ICartProduct, newQuantityValue: number) => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		updateCartQuantity(product, newQuantityValue);
	};

	return (
		<View style={styles.itemsContainer}>
			{cart.map((item) => (
				<ProductCart
					product={item}
					onUpdateProductQuantity={onUpdateProductQuantity}
					key={`${item.slug}-${item.size as ISize}`}
					checkout={checkout}
				/>
			))}
		</View>
	);
};

export default CartProducts;
