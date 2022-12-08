import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
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

	return (
		<View style={{ paddingTop: top, ...styles.container }}>
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
				<PaymentStatus isPaid={order?.isPaid as boolean} />
				<ProductsOrder />
				<SummaryBill />
				{!order?.isPaid && !loading && (
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
				)}
			</ScrollView>
			<Loading modalVisible={loading} />
		</View>
	);
};

export default PayOrder;
