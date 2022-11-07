import { createStackNavigator } from '@react-navigation/stack';

import { Search } from '../screens';

export type SearchStackParams = {
	SearchHome: undefined;
};

const Stack = createStackNavigator<SearchStackParams>();

export const SearchStackNav = () => {
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
			<Stack.Screen name="SearchHome" options={{ title: 'Search Home' }} component={Search} />
		</Stack.Navigator>
	);
};
