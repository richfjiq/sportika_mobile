import { View } from 'react-native';
import { Cart, EmptyCart } from '../../components';
import { useCart } from '../../store';

const ShoppingCart = () => {
	const { cart } = useCart();

	if (cart.length === 0) {
		return (
			<View>
				<EmptyCart />
			</View>
		);
	}

	return <Cart />;
};

export default ShoppingCart;
