import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { Header } from '../Header';
import { styles } from './EmptyCart.style';

const EmptyCart = () => {
	return (
		<View>
			<Header title="Shopping Cart" search={false} />
			<View style={styles.bodyContainer}>
				<Icon name={'cart-outline'} size={50} color={colors.black} />
				<Text>The cart is empty</Text>
				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
					<Text style={styles.buttonText}>Buy now</Text>
					<Icon name={'arrow-forward-outline'} size={20} color={colors.white} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EmptyCart;
