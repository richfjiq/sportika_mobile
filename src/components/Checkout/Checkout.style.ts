import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	checkoutContainer: {
		marginHorizontal: 16,
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
		borderRadius: 10,
		padding: 16,
	},
	separator: {
		marginVertical: 10,
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 25,
		marginBottom: 15,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
	orderTitle: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '600',
	},
	orderText: {
		fontSize: 15,
		textTransform: 'uppercase',
		fontWeight: '400',
	},
	totalText: {
		fontSize: 15,
		textTransform: 'uppercase',
		fontWeight: '700',
		marginTop: 10,
	},
});
