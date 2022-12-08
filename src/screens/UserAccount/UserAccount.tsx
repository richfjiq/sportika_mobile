import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuCategories, MyAccount, MyOrders } from '../../components';
import { MyAddress } from '../../components/MyAddress';
import { useAuth, useCart, useOrders, useUser } from '../../store';
import { colors } from '../../theme/appTheme';
import { menuCategories } from '../../utils';
import { styles } from './UserAccount.style';

const UserAccount = () => {
	const [activeCategory, setActiveCategory] = useState(menuCategories[1]);
	const { top } = useSafeAreaInsets();
	const { loading: loadingAuth, logout, user } = useAuth();
	const { orderConfirmed, resetOrderId, setOrderConfirmed } = useCart();
	const { loading: loadingOrders, getOrdersByUser, resetOrder } = useOrders();
	const { loading: loadingAddress, getUserAddress } = useUser();
	const isFocused = useIsFocused();

	const getOrders = useCallback(async () => {
		if (user) {
			await getOrdersByUser(user._id);
			await getUserAddress(user._id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const goToOrders = useCallback(() => {
		if (orderConfirmed) {
			setActiveCategory(menuCategories[3]);
		}
	}, [orderConfirmed]);

	useEffect(() => {
		if (isFocused && orderConfirmed) {
			resetOrderId();
			resetOrder();
			setOrderConfirmed(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFocused, orderConfirmed]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getOrders();
	}, [getOrders]);

	useEffect(() => {
		goToOrders();
	}, [goToOrders]);

	const renderComponent = () => {
		if (loadingOrders || loadingAddress || loadingAuth) {
			return (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size="large" color={colors.black} />
				</View>
			);
		}

		switch (activeCategory) {
			case 'address':
				return <MyAddress />;
			case 'orders':
				return <MyOrders />;
			default:
				return <MyAccount />;
		}
	};

	return (
		<View style={{ paddingTop: top, ...styles.container }}>
			<View style={styles.headerRow}>
				<Text style={styles.headerText}>{`Hi ${user?.name ?? ''}`}</Text>
				<TouchableOpacity onPress={logout}>
					<Icon name={'log-out-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
			<MenuCategories active={activeCategory} setActive={setActiveCategory} />
			{renderComponent()}
		</View>
	);
};

export default UserAccount;
