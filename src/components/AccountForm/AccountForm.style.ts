import { StyleSheet } from 'react-native';

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
	input: {
		borderWidth: 0.5,
		borderColor: colors.greyText,
		marginTop: 5,
		height: 40,
		borderRadius: 5,
		fontSize: 16,
		paddingRight: 10,
		paddingLeft: 15,
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
		marginTop: 25,
		marginBottom: 120,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
});
