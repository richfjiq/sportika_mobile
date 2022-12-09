import { ScrollView, View } from 'react-native';

import { CartProducts, Header, SummaryOrder } from '../../components';
import { useCart } from '../../store';
import { styles } from './Checkout.style';

const Checkout = () => {
	const { cart } = useCart();

	return (
		<View style={{ flex: 1 }}>
			<Header title="Order Summary" search={false} />
			<View style={styles.separator} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
				<CartProducts cart={cart} checkout={true} />
				<SummaryOrder checkout={true} />
			</ScrollView>
		</View>
	);
};

export default Checkout;
