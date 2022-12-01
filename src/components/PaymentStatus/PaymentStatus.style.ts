import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	paymentStatus: {
		borderWidth: 1,
		flexDirection: 'row',
		alignSelf: 'flex-start',
		paddingHorizontal: 15,
		paddingVertical: 2,
		borderRadius: 5,
		alignItems: 'center',
		borderColor: colors.red,
		marginTop: 10,
	},
	textStatus: {
		textTransform: 'uppercase',
		fontWeight: '600',
		fontSize: 14,
		color: colors.red,
		marginLeft: 5,
	},
});
