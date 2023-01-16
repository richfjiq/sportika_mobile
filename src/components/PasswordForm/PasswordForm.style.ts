import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 25,
		marginBottom: 32,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	errorText: {
		color: colors.error,
		marginTop: 5,
		fontSize: 12,
		marginBottom: 10,
		textTransform: 'uppercase',
		fontWeight: '300',
	},
	label: {
		textTransform: 'uppercase',
		fontWeight: '300',
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
	iconContainer: {
		position: 'absolute',
		zIndex: 10,
		marginTop: 5,
		right: 0,
		height: 40,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		paddingHorizontal: 16,
	},
	cancelButton: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 25,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 35,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
});
