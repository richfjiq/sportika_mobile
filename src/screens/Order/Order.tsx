import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import { useCallback, useEffect } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
	Platform,
	useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { Loading, PaymentStatus, ProductsOrder, SummaryBill } from '../../components';
import { usePayment } from '../../hooks';
import { CartStackParams } from '../../navigation/CartStackNav';
import { useCart, useOrders } from '../../store';
import { colors } from '../../theme/appTheme';
import { responsiveFontSize, responsiveIcon } from '../../utils';
import { styles } from './Order.style';

interface Props extends StackScreenProps<CartStackParams, 'Order'> {}

const Order = ({ navigation }: Props) => {
	const { width } = useWindowDimensions();
	const { orderId, setOrderConfirmed } = useCart();
	const { top } = useSafeAreaInsets();
	const { order, getOrderById, loading: loadingOrder, getOrdersByUser } = useOrders();
	const { loadingPS, openPaymentSheet } = usePayment();

	const payLater = async () => {
		setOrderConfirmed(true);
		await getOrdersByUser(order?.user as string);
		navigation.navigate(
			'UserStack' as never,
			{ screen: 'UserAccount' } as never,
			// { screen: 'UserAccount', params: { fromOrder: true } } as never,
		);
	};

	const removeCartFromStorage = useCallback(async () => {
		if (order) {
			await AsyncStorage.removeItem('cart');
		}
	}, [order]);

	useEffect(() => {
		if (orderId) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getOrderById(orderId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderId]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		removeCartFromStorage();
	}, [removeCartFromStorage, order]);

	return (
		<View style={{ paddingTop: Platform.OS === 'ios' ? top : 10, ...styles.container }}>
			<View style={styles.headerContainer}>
				<Text style={{ ...styles.title, ...responsiveFontSize(18, width) }}>Order: </Text>
				<Text style={{ ...styles.titleBold, ...responsiveFontSize(18, width) }}>
					{' '}
					{orderId || order?._id}
				</Text>
			</View>
			<View style={styles.separator} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContainer}>
				<PaymentStatus isPaid={order?.isPaid as boolean} />
				<ProductsOrder />
				<SummaryBill />

				{!loadingOrder && !order?.isPaid && (
					<>
						<TouchableOpacity
							style={loadingPS ? styles.buttonCenter : styles.button}
							activeOpacity={0.7}
							onPress={openPaymentSheet}
							disabled={loadingPS}
						>
							{loadingPS ? (
								<ActivityIndicator
									style={styles.activityIndicator}
									size="small"
									color={colors.white}
								/>
							) : (
								<>
									<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>
										Pay now
									</Text>
									<Icon
										name={'cash-outline'}
										size={responsiveIcon(20, width)}
										color={colors.white}
									/>
								</>
							)}
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.buttonLater}
							activeOpacity={0.7}
							onPress={payLater}
							disabled={loadingPS}
						>
							{loadingPS ? (
								<ActivityIndicator size="small" color={colors.cultured} />
							) : (
								<Text style={{ ...styles.buttonText, ...responsiveFontSize(16, width) }}>
									Pay Later
								</Text>
							)}
						</TouchableOpacity>
					</>
				)}

				<Loading modalVisible={loadingOrder} />
			</ScrollView>
		</View>
	);
};

export default Order;
