import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Home } from '../screens';
import { CartStackNav } from './CartStackNav';
import { SearchStackNav } from './SearchStackNav';
import { UserStackNav } from './UserStackNav';

export type RootTabsParams = {
	Home: undefined;
	SearchStack: undefined;
	CartStack: undefined;
	Tab4: undefined;
};

const Tab = createBottomTabNavigator();

export const BottomTabsNav = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: 'black',
				tabBarStyle: {
					borderTopColor: '#DCDCDC',
					borderTopWidth: 0.5,
					elevation: 0,
				},
				tabBarInactiveTintColor: '#DCDCDC',
				tabBarLabel: () => null,
				tabBarLabelStyle: {
					fontSize: 15,
				},
				tabBarIcon({ color }) {
					let iconName = '';
					let size = 20;

					switch (route.name) {
						case 'Home':
							iconName = 'home-outline';
							break;
						case 'SearchStack':
							iconName = 'search-outline';
							size = 24;
							break;
						case 'CartStack':
							iconName = 'cart-outline';
							size = 24;
							break;
						case 'UserStack':
							iconName = 'person-circle-outline';
							size = 24;
							break;
					}

					return <Icon name={iconName} size={size} color={color} />;
				},
				headerShown: false,
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="SearchStack" component={SearchStackNav} />
			<Tab.Screen name="CartStack" component={CartStackNav} />
			<Tab.Screen name="UserStack" component={UserStackNav} />
		</Tab.Navigator>
	);
};
