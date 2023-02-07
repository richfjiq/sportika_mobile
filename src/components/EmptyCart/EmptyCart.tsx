import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { Header } from '../Header';
import { styles } from './EmptyCart.style';
import { responsiveFontSize, responsiveIcon } from '../../utils';

const EmptyCart = () => {
	const { width } = useWindowDimensions();
	const navigator = useNavigation();

	const goToBuy = () => {
		navigator.navigate('MenuStack' as never, { screen: 'Menu' } as never);
	};

	return (
		<View>
			<Header title="Shopping Cart" search={false} />
			<View style={styles.bodyContainer}>
				<Icon name={'cart-outline'} size={responsiveIcon(50, width)} color={colors.black} />
				<Text style={{ ...responsiveFontSize(12, width) }}>The cart is empty</Text>
				<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
					<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>Buy now</Text>
					<Icon
						name={'arrow-forward-outline'}
						size={responsiveIcon(20, width)}
						color={colors.white}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EmptyCart;
