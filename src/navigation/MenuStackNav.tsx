import { createStackNavigator } from '@react-navigation/stack';

import { Menu } from '../screens';

export type MenuStackParams = {
	Menu: undefined;
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
			}}
		>
			<Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
		</Stack.Navigator>
	);
};
