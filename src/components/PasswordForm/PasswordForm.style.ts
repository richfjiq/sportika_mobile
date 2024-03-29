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
		fontSize: 16,
		fontWeight: '700',
		textTransform: 'uppercase',
		color: colors.darkCharcoal,
	},
	errorText: {
		color: colors.error,
		marginTop: 5,
		fontSize: 14,
		marginBottom: 10,
		fontWeight: '400',
		position: 'absolute',
		bottom: 4,
	},
	label: {
		textTransform: 'uppercase',
		fontWeight: '400',
		fontSize: 16,
		color: colors.darkCharcoal,
	},
	input: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		marginTop: 5,
		height: 40,
		borderRadius: 5,
		fontSize: 16,
		paddingRight: 10,
		paddingLeft: 15,
		marginBottom: 35,
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
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 35,
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 35,
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
});
