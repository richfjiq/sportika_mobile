import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	checkoutContainer: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		borderRadius: 10,
		padding: 16,
	},
	separator: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	orderTitleAddress: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
		marginBottom: 10,
	},
	orderText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
	},
	orderTextAddress: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
		marginBottom: 5,
	},
	totalText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
		marginTop: 10,
	},
	billText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
		marginBottom: 10,
	},
});
