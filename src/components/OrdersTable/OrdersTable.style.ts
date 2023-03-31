import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 0.5,
		borderColor: colors.crocodileTooth,
	},
	orderContainer: {
		width: '18%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	statusContainer: {
		width: '26%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	dateContainer: {
		width: '28%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	detailsContainer: {
		width: '28%',
		alignItems: 'center',
	},
	headerText: {
		textTransform: 'uppercase',
		fontWeight: '400',
	},
	text: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '300',
	},
	textPaid: {
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.green,
	},
	textPending: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.red,
	},
	textCanceled: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.greyText,
	},
	buttonText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
		color: colors.cultured,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		paddingHorizontal: 15,
		paddingVertical: 3,
		borderRadius: 10,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
});
