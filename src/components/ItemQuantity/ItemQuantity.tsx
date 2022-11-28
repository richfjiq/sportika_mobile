import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './ItemQuantity.style';

interface Props {
	quantity: number;
	updateQuantity: (value: number) => void;
	cart?: boolean;
}

const ItemQuantity = ({ quantity, updateQuantity, cart = false }: Props) => {
	const updateItemQuantity = (value: number) => {
		if (value === -1) {
			if (quantity === 1) return;
			return updateQuantity(quantity - 1);
		}

		updateQuantity(quantity + 1);
	};

	return (
		<>
			<Text style={cart ? styles.subHeaderCart : styles.subHeader}>Quantity</Text>
			<View style={cart ? styles.quantityContainerCart : styles.quantityContainer}>
				<TouchableOpacity onPress={() => updateItemQuantity(-1)}>
					<Icon name={'remove-circle-outline'} size={cart ? 20 : 25} color={colors.black} />
				</TouchableOpacity>
				<Text style={cart ? styles.quantityCart : styles.quantity}>{quantity}</Text>
				<TouchableOpacity onPress={() => updateItemQuantity(1)}>
					<Icon name={'add-circle-outline'} size={cart ? 20 : 25} color={colors.black} />
				</TouchableOpacity>
			</View>
		</>
	);
};

export default ItemQuantity;
