import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './ItemQuantity.style';
import { colors } from '../../theme/appTheme';
import { responsiveFontSize, responsiveIcon } from '../../utils';

interface Props {
	quantity: number;
	updateQuantity: (value: number) => void;
	cart?: boolean;
}

const ItemQuantity = ({ quantity, updateQuantity, cart = false }: Props) => {
	const { width } = useWindowDimensions();
	const updateItemQuantity = (value: number) => {
		if (value === -1) {
			if (quantity === 1) return;
			return updateQuantity(quantity - 1);
		}

		updateQuantity(quantity + 1);
	};

	return (
		<>
			<Text
				style={
					cart
						? { ...styles.subHeaderCart, ...responsiveFontSize(14, width) }
						: { ...styles.subHeader, ...responsiveFontSize(16, width) }
				}
			>
				Quantity
			</Text>
			<View style={cart ? styles.quantityContainerCart : styles.quantityContainer}>
				<TouchableOpacity onPress={() => updateItemQuantity(-1)}>
					<Icon
						name={'remove-circle-outline'}
						size={cart ? responsiveIcon(20, width) : responsiveIcon(25, width)}
						color={colors.black}
					/>
				</TouchableOpacity>
				<Text
					style={
						cart
							? { ...styles.quantityCart, ...responsiveFontSize(14, width) }
							: { ...styles.quantity, ...responsiveFontSize(18, width) }
					}
				>
					{quantity}
				</Text>
				<TouchableOpacity onPress={() => updateItemQuantity(1)}>
					<Icon
						name={'add-circle-outline'}
						size={cart ? responsiveIcon(20, width) : responsiveIcon(25, width)}
						color={colors.black}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default ItemQuantity;
