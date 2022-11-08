import { createStackNavigator } from '@react-navigation/stack';

import { Search } from '../screens';

export type MenuStackParams = {
	SearchHome: undefined;
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
			<Stack.Screen name="SearchHome" options={{ headerShown: false }} component={Search} />
		</Stack.Navigator>
	);
};
