import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	checkoutContainer: {
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
	orderTitleAddress: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '600',
		marginBottom: 10,
	},
	orderText: {
		fontSize: 15,
		textTransform: 'uppercase',
		fontWeight: '400',
	},
	orderTextAddress: {
		fontSize: 15,
		textTransform: 'uppercase',
		fontWeight: '400',
		marginBottom: 5,
	},
	totalText: {
		fontSize: 15,
		textTransform: 'uppercase',
		fontWeight: '700',
		marginTop: 10,
	},
	billText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '600',
		marginBottom: 10,
	},
});
