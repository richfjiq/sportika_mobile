import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	checkoutContainer: {
		marginHorizontal: 16,
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		borderRadius: 10,
		padding: 16,
		marginBottom: 30,
	},
	separator: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
	},
	rowHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 25,
		marginBottom: 15,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '700',
		color: colors.cultured,
	},
	orderTitle: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
	},
	orderTitleAddress: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
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
	},
	removeText: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.link,
	},
});
