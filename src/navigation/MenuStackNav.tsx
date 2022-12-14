import { createStackNavigator } from '@react-navigation/stack';

import { Menu, ProductDetails, Search } from '../screens';

export type MenuStackParams = {
	Menu: undefined;
	ProductDetails: { slug: string };
	Search: undefined;
};

const Stack = createStackNavigator<MenuStackParams>();

export const MenuStackNav = () => {
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
				gestureEnabled: false,
			}}
		>
			<Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
			<Stack.Screen
				name="ProductDetails"
				options={{ headerShown: false }}
				component={ProductDetails}
			/>
			<Stack.Screen name="Search" options={{ headerShown: false }} component={Search} />
		</Stack.Navigator>
	);
};
