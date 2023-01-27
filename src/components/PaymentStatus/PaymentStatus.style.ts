import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	statusPending: {
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
	statusPaid: {
		borderWidth: 1,
		flexDirection: 'row',
		alignSelf: 'flex-start',
		paddingHorizontal: 15,
		paddingVertical: 2,
		borderRadius: 5,
		alignItems: 'center',
		borderColor: colors.green,
		marginTop: 10,
	},
	statusCanceled: {
		borderWidth: 1,
		flexDirection: 'row',
		alignSelf: 'flex-start',
		paddingHorizontal: 15,
		paddingVertical: 2,
		borderRadius: 5,
		alignItems: 'center',
		borderColor: colors.greyText,
		marginTop: 10,
	},
	textPending: {
		textTransform: 'uppercase',
		fontWeight: '600',
		fontSize: 14,
		color: colors.red,
		marginLeft: 5,
	},
	textPaid: {
		textTransform: 'uppercase',
		fontWeight: '600',
		fontSize: 14,
		color: colors.green,
		marginLeft: 5,
	},
	textCanceled: {
		textTransform: 'uppercase',
		fontWeight: '600',
		fontSize: 14,
		color: colors.greyText,
		marginLeft: 5,
	},
});
