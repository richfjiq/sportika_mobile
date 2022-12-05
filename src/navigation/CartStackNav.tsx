import { createStackNavigator } from '@react-navigation/stack';

import { Checkout, Order, ShoppingCart } from '../screens';
import { useCart } from '../store';

export type CartStackParams = {
	ShoppingCart: undefined;
	Checkout: undefined;
	Order: { orderId: string };
};

const Stack = createStackNavigator<CartStackParams>();

export const CartStackNav = () => {
	const { numberOfItems } = useCart();

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					elevation: 0,
					shadowColor: 'transparent',
				},
				cardStyle: {
					backgroundColor: 'white',
				},
				headerShown: false,
				gestureEnabled: false,
			}}
		>
			<Stack.Screen name="ShoppingCart" component={ShoppingCart} />
			{numberOfItems !== 0 && <Stack.Screen name="Checkout" component={Checkout} />}
			{numberOfItems !== 0 && <Stack.Screen name="Order" component={Order} />}
		</Stack.Navigator>
	);
};
