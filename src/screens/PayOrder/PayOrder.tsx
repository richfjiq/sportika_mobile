import { StackScreenProps } from '@react-navigation/stack';
import moment from 'moment';
import { useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
	Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { Loading, PaymentStatus, ProductsOrder, SummaryBill } from '../../components';
import { usePayment } from '../../hooks';
import { UserStackParams } from '../../navigation/UserStackNav';
import { useCart, useOrders } from '../../store';
import { colors } from '../../theme/appTheme';
import { styles } from './PayOrder.style';

interface Props extends StackScreenProps<UserStackParams, 'PayOrder'> {}

const PayOrder = ({ navigation }: Props) => {
	const { top } = useSafeAreaInsets();
	const { orderId, resetOrderId } = useCart();
	const { order, loading, getOrderById, resetOrder } = useOrders();
	const { openPaymentSheet, loadingPS } = usePayment();

	useEffect(() => {
		if (orderId) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getOrderById(orderId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderId]);

	const closeScreen = () => {
		resetOrderId();
		resetOrder();
		navigation.goBack();
	};

	const today = new Date();
	const date = new Date(order?.updatedAt as string);
	const timeInDays = moment(today).diff(moment(date), 'days') || 0;

	const renderButton = () => {
		if (loading) return null;
		if (order?.isPaid) return null;
		if (timeInDays >= 2) return null;
		return (
			<TouchableOpacity
				style={loadingPS ? styles.buttonCenter : styles.button}
				activeOpacity={0.7}
				onPress={openPaymentSheet}
				disabled={loadingPS}
			>
				{loadingPS ? (
					<ActivityIndicator size="small" color={colors.white} />
				) : (
					<>
						<Text style={styles.buttonText}>Pay now</Text>
						<Icon name={'cash-outline'} size={20} color={colors.white} />
					</>
				)}
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ paddingTop: Platform.OS === 'ios' ? top : 0, ...styles.container }}>
			<View style={styles.headerContainer}>
				<View style={styles.headerRow}>
					<Text style={styles.headerText}>Order: </Text>
					<Text style={styles.headerTitle}>{orderId}</Text>
				</View>
				<TouchableOpacity onPress={closeScreen}>
					<Icon name={'close-outline'} size={28} color={colors.black} />
				</TouchableOpacity>
			</View>
			<View style={styles.divider} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
				<PaymentStatus isPaid={order?.isPaid as boolean} timeInDays={timeInDays} />
				<ProductsOrder />
				<SummaryBill />
				{renderButton()}
				<View style={{ height: 50 }} />
			</ScrollView>
			<Loading modalVisible={loading} />
		</View>
	);
};

export default PayOrder;
