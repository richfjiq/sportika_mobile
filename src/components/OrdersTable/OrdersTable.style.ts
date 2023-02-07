import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 0.5,
		borderColor: colors.inactiveGrey,
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
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '300',
	},
	textPaid: {
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.green,
	},
	textPending: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.red,
	},
	textCanceled: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.greyText,
	},
	buttonText: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '500',
		color: colors.white,
	},
	button: {
		backgroundColor: colors.black,
		paddingHorizontal: 15,
		paddingVertical: 3,
		borderRadius: 10,
	},
});
