import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Home } from '../screens';
import { colors } from '../theme/appTheme';
import { CartStackNav } from './CartStackNav';
import { MenuStackNav, MenuStackParams } from './MenuStackNav';
import { UserStackNav } from './UserStackNav';
import { useAuth, useCart } from '../store';
import { useProducts } from '../store';
import { Alert, Text, View } from 'react-native';
import { styles } from './BottomTabsNav.style';
import axios from 'axios';
import Config from 'react-native-config';
import { IProduct } from '../interfaces';

const baseURL = Config.API_URL || '';

export type RootTabsParams = {
	Home: undefined;
	MenuStack: MenuStackParams;
	CartStack: undefined;
	UserStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParams>();

export const BottomTabsNav = () => {
	const { checkToken } = useAuth();
	const { setAllProducts } = useProducts();
	const { numberOfItems } = useCart();

	const getProducts = async () => {
		try {
			const response = await axios.get<IProduct[]>(`${baseURL}/products`);
			setAllProducts(response.data);
		} catch (error) {
			Alert.alert('Get Products', 'Error Server');
		}
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		checkToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: 'black',
				tabBarStyle: {
					borderTopColor: colors.inactiveGrey,
					borderTopWidth: 0.5,
					elevation: 0,
				},
				tabBarInactiveTintColor: colors.inactiveGrey,
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
						case 'MenuStack':
							iconName = 'menu-outline';
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

					if (route.name === 'CartStack' && numberOfItems !== 0) {
						return (
							<View>
								<View style={styles.container}>
									<Text style={styles.text}>{numberOfItems}</Text>
								</View>
								<Icon name={iconName} size={size} color={color} />
							</View>
						);
					}

					return <Icon name={iconName} size={size} color={color} />;
				},
				headerShown: false,
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="MenuStack" component={MenuStackNav} />
			<Tab.Screen name="CartStack" component={CartStackNav} />
			<Tab.Screen name="UserStack" component={UserStackNav} />
		</Tab.Navigator>
	);
};
