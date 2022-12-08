import { createStackNavigator } from '@react-navigation/stack';

import { Login, PayOrder, UserAccount } from '../screens';
import { useAuth } from '../store';

export type UserStackParams = {
	UserAccount: undefined;
	Login: undefined;
	PayOrder: undefined;
};

const Stack = createStackNavigator<UserStackParams>();

export const UserStackNav = () => {
	const { token } = useAuth();

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
			{token ? (
				<>
					<Stack.Screen
						name="UserAccount"
						options={{ title: 'Login screen' }}
						component={UserAccount}
					/>
					<Stack.Screen name="PayOrder" component={PayOrder} />
				</>
			) : (
				<Stack.Screen name="Login" options={{ title: 'Login screen' }} component={Login} />
			)}
		</Stack.Navigator>
	);
};
