import { createStackNavigator } from '@react-navigation/stack';

import { Checkout, ShoppingCart } from '../screens';

export type CartStackParams = {
	ShoppingCart: undefined;
	Checkout: undefined;
};

const Stack = createStackNavigator<CartStackParams>();

export const CartStackNav = () => {
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
			}}
		>
			<Stack.Screen name="ShoppingCart" component={ShoppingCart} />
			<Stack.Screen name="Checkout" component={Checkout} />
		</Stack.Navigator>
	);
};
