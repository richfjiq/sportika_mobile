import { createStackNavigator } from '@react-navigation/stack';

import { Cart } from '../screens';

export type CartStackParams = {
	CartHome: undefined;
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
			}}
		>
			<Stack.Screen name="CartHome" options={{ title: 'CartHome' }} component={Cart} />
		</Stack.Navigator>
	);
};
