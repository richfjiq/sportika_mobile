import { useCallback, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Home } from '../screens';
import { colors } from '../theme/appTheme';
import { CartStackNav } from './CartStackNav';
import { MenuStackNav, MenuStackParams } from './MenuStackNav';
import { UserStackNav } from './UserStackNav';
import { useAuth, useCart, useOrders, useUser } from '../store';
import { useProducts } from '../store';
import { Alert, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './BottomTabsNav.style';
import axios from 'axios';
import Config from 'react-native-config';
import { ICartProduct, IProduct } from '../interfaces';
import {
	responsiveFontSize,
	responsiveIcon,
	responsiveIconContainer,
	tabBarHeight,
} from '../utils';

const baseURL = Config.API_URL || '';

export type RootTabsParams = {
	Home: undefined;
	MenuStack: MenuStackParams;
	CartStack: undefined;
	UserStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParams>();

export const BottomTabsNav = () => {
	const { width } = useWindowDimensions();
	const { getOrdersByUser } = useOrders();
	const { user, checkToken } = useAuth();
	const { getUserAddress, setLoadingUserInfo } = useUser();
	const { setAllProducts } = useProducts();
	const { numberOfItems, addCartFromCookies } = useCart();

	console.log({ width });

	const getProducts = async () => {
		try {
			const response = await axios.get<IProduct[]>(`${baseURL}/products`);
			setAllProducts(response.data);
			await checkToken();
		} catch (error) {
			Alert.alert('Get Products', 'Error Server');
		}
	};

	const getCartFromCookies = async () => {
		const cart = await AsyncStorage.getItem('cart');
		if (cart) {
			const cartParsed = JSON.parse(cart) as ICartProduct[];
			addCartFromCookies(cartParsed);
		}
	};

	const getUserAccountInfo = useCallback(async () => {
		if (user) {
			setLoadingUserInfo(true);
			await getOrdersByUser(user._id);
			await getUserAddress(user._id);
			setLoadingUserInfo(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCartFromCookies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const products = setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getProducts();
		}, 1000);

		return () => clearTimeout(products);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getUserAccountInfo();
	}, [getUserAccountInfo]);

	const contStyle = () => {
		if (width >= 900) return styles.cont900;
		if (width >= 800) return styles.cont800;
		if (width >= 700) return styles.cont700;
		if (width >= 600) return styles.cont600;
		return styles.container;
	};

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
					height: tabBarHeight(width),
				},
				tabBarInactiveTintColor: colors.inactiveGrey,
				tabBarLabel: () => null,
				tabBarLabelStyle: responsiveFontSize(15, width),
				tabBarIcon({ color }) {
					let iconName = '';
					let size = responsiveIcon(20, width);

					switch (route.name) {
						case 'Home':
							iconName = 'home-outline';
							break;
						case 'MenuStack':
							iconName = 'menu-outline';
							size = responsiveIcon(24, width);
							break;
						case 'CartStack':
							iconName = 'cart-outline';
							size = responsiveIcon(24, width);
							break;
						case 'UserStack':
							iconName = 'person-circle-outline';
							size = responsiveIcon(24, width);
							break;
					}

					if (route.name === 'CartStack' && numberOfItems !== 0) {
						return (
							<View>
								<View style={contStyle()}>
									<Text style={{ ...styles.text, ...responsiveFontSize(8, width) }}>
										{numberOfItems}
									</Text>
								</View>
								<Icon name={iconName} size={size} color={color} />
							</View>
						);
					}

					return <Icon name={iconName} size={size} color={color} />;
				},
				headerShown: false,
				tabBarIconStyle: {
					width: 70,
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="MenuStack" component={MenuStackNav} />
			<Tab.Screen name="CartStack" component={CartStackNav} />
			<Tab.Screen name="UserStack" component={UserStackNav} />
		</Tab.Navigator>
	);
};
