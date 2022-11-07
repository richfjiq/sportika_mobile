import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens';

export type UserStackParams = {
	Login: undefined;
};

const Stack = createStackNavigator<UserStackParams>();

export const UserStackNav = () => {
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
			<Stack.Screen name="Login" options={{ title: 'Login screen' }} component={Login} />
		</Stack.Navigator>
	);
};
