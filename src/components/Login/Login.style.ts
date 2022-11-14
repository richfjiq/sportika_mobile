import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 25,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
	googleButton: {
		width: '100%',
	},
	googleButtonContainer: {
		flexDirection: 'row',
		borderWidth: 0.5,
		borderColor: colors.greyText,
		borderRadius: 5,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30,
	},
	googleLabel: {
		fontSize: 16,
	},
	googleIcon: {
		height: 30,
		width: 30,
		marginRight: 20,
	},
	label: {
		fontSize: 16,
	},
	link: {
		fontSize: 14,
		color: 'blue',
	},
	title: {
		fontSize: 20,
		textTransform: 'uppercase',
		fontWeight: '700',
	},
	input: {
		borderWidth: 0.5,
		borderColor: colors.greyText,
		marginTop: 10,
		height: 40,
		borderRadius: 5,
		fontSize: 16,
		paddingHorizontal: 10,
	},
	inputContainer: {
		marginTop: 20,
	},
	socialAuthContainer: {
		marginTop: 30,
		borderTopWidth: 0.5,
		borderColor: colors.greyText,
	},
	textContainer: {
		marginTop: 10,
		alignItems: 'flex-end',
	},
});
