import { View } from 'react-native';

import { useCart } from '../../store';
import { CartProducts } from '../CartProducts';
import { SummaryOrder } from '../SummaryOrder';
import { Header } from '../Header';
import { styles } from './Cart.style';

const Cart = () => {
	const { cart } = useCart();

	return (
		<View>
			<Header title="Shopping Cart" search={false} />
			<View style={styles.container}>
				<CartProducts cart={cart} />
				<SummaryOrder />
			</View>
		</View>
	);
};

export default Cart;
