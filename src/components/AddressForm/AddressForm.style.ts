import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 10,
		marginBottom: 16,
		borderBottomWidth: 0.5,
		borderColor: colors.inactiveGrey,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	errorText: {
		color: colors.error,
		marginTop: 5,
		fontSize: 13,
		marginBottom: 10,
	},
	label: {
		fontSize: 16,
		marginBottom: 0,
	},
	selectInput: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 5,
		height: Platform.OS === 'ios' ? 40 : 45,
		borderRadius: 5,
	},
	selectWidthL: {
		fontSize: 25,
	},
	input: {
		borderWidth: 0.5,
		borderColor: colors.greyText,
		marginTop: 5,
		height: Platform.OS === 'ios' ? 40 : 45,
		borderRadius: 5,
		fontSize: 16,
		paddingRight: 10,
		paddingLeft: 15,
	},
	inputsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputContainer: {
		width: '48%',
	},
	formContainer: {
		paddingHorizontal: 30,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 50,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
});
