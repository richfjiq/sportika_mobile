import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		marginHorizontal: 16,
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingTop: 15,
		paddingBottom: 10,
		borderWidth: 0.5,
		borderColor: colors.greyText,
	},
	editRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	editText: {
		fontSize: 14,
		fontWeight: '300',
		textTransform: 'uppercase',
		color: colors.link,
	},
	headerText: {
		fontSize: 16,
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	text: {
		fontSize: 16,
		fontWeight: '300',
		textTransform: 'uppercase',
		marginBottom: 5,
	},
	rowContainer: {
		marginBottom: 15,
	},
	rowLastContainer: {
		marginBottom: 0,
	},
});
