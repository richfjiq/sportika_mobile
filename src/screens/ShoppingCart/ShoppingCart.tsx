import { ScrollView, View } from 'react-native';
import { Cart, EmptyCart } from '../../components';
import { useCart } from '../../store';

const ShoppingCart = () => {
	const { cart } = useCart();

	if (cart.length === 0) {
		<View>
			<EmptyCart />
		</View>;
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Cart />
		</ScrollView>
	);
};

export default ShoppingCart;
