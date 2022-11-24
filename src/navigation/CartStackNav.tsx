import { createStackNavigator } from '@react-navigation/stack';

import { ShoppingCart } from '../screens';

export type CartStackParams = {
	ShoppingCart: undefined;
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
		</Stack.Navigator>
	);
};
