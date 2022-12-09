import { ScrollView, View } from 'react-native';

import { useCart } from '../../store';
import { CartProducts } from '../CartProducts';
import { SummaryOrder } from '../SummaryOrder';
import { Header } from '../Header';
import { styles } from './Cart.style';

const Cart = () => {
	const { cart } = useCart();

	return (
		<View style={styles.flex}>
			<Header title="Shopping Cart" search={false} />
			<View style={styles.separator} />
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<CartProducts cart={cart} />
				<SummaryOrder />
			</ScrollView>
		</View>
	);
};

export default Cart;
