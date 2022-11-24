import { View } from 'react-native';

import { ICartProduct } from '../../interfaces';
import { useCart } from '../../store';
import { Checkout } from '../Checkout';
import { Header } from '../Header';
import { ProductCart } from '../ProductCart';
import { styles } from './Cart.style';

const Cart = () => {
	const { cart, updateCartQuantity } = useCart();

	const onUpdateProductQuantity = (product: ICartProduct, newQuantityValue: number) => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		updateCartQuantity(product, newQuantityValue);
	};

	return (
		<View>
			<Header title="Shopping Cart" search={false} />
			<View style={styles.container}>
				<View style={styles.itemsContainer}>
					{cart.map((item) => (
						<ProductCart
							product={item}
							onUpdateProductQuantity={onUpdateProductQuantity}
							key={item.slug}
						/>
					))}
				</View>
				<Checkout />
			</View>
		</View>
	);
};

export default Cart;
