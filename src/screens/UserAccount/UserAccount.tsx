import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Config from 'react-native-config';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Loading, MenuCategories, MyAccount, MyOrders } from '../../components';
import { MyAddress } from '../../components/MyAddress';
import { useAuth, useCart, useOrders, useUser } from '../../store';
import { colors } from '../../theme/appTheme';
import { menuCategories, responsiveFontSize, responsiveIcon } from '../../utils';
import { styles } from './UserAccount.style';

const googleClientId = Config.GOOGLE_CLIENT_ID;

const UserAccount = () => {
	const { width } = useWindowDimensions();
	const [activeCategory, setActiveCategory] = useState(menuCategories[1]);
	const { top } = useSafeAreaInsets();
	const { logout, user } = useAuth();
	const { orderConfirmed, resetOrderId, setOrderConfirmed } = useCart();
	const { resetOrder } = useOrders();
	const { loadingUserInfo } = useUser();
	const isFocused = useIsFocused();

	const goToOrders = useCallback(() => {
		if (orderConfirmed) {
			setActiveCategory(menuCategories[3]);
		}
	}, [orderConfirmed]);

	const userLogout = async () => {
		logout();
		await GoogleSignin.signOut();
	};

	useEffect(() => {
		if (isFocused && orderConfirmed) {
			resetOrderId();
			resetOrder();
			setOrderConfirmed(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFocused, orderConfirmed]);

	useEffect(() => {
		goToOrders();
	}, [goToOrders]);

	useEffect(() => {
		GoogleSignin.configure({
			iosClientId: googleClientId,
		});
	}, []);

	const renderComponent = () => {
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
		<View style={{ paddingTop: Platform.OS === 'ios' ? top : 10, ...styles.container }}>
			<View style={styles.headerRow}>
				<Text style={{ ...styles.headerText, ...responsiveFontSize(18, width) }}>{`Hi ${
					user?.name ?? ''
				}`}</Text>
				<TouchableOpacity onPress={userLogout}>
					<Icon
						name={'log-out-outline'}
						size={responsiveIcon(24, width)}
						color={colors.darkCharcoal}
					/>
				</TouchableOpacity>
			</View>
			<MenuCategories active={activeCategory} setActive={setActiveCategory} />
			{renderComponent()}
			<Loading modalVisible={loadingUserInfo} />
		</View>
	);
};

export default UserAccount;
