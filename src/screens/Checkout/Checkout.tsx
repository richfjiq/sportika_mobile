import { ScrollView, View } from 'react-native';

import { CartProducts, Header, SummaryOrder } from '../../components';
import { useCart } from '../../store';
import { styles } from './Checkout.style';

const Checkout = () => {
	const { cart } = useCart();
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Header title="Order Summary" search={false} />
			<View style={styles.container}>
				<CartProducts cart={cart} checkout={true} />
				<SummaryOrder checkout={true} />
			</View>
		</ScrollView>
	);
};

export default Checkout;
