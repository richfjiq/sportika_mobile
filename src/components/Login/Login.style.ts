import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		height: '100%',
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
	errorText: {
		color: colors.error,
		marginTop: 5,
		fontSize: 12,
		textTransform: 'uppercase',
		fontWeight: '300',
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
		textTransform: 'uppercase',
		fontWeight: '400',
	},
	googleIcon: {
		height: 30,
		width: 30,
		marginRight: 20,
	},
	label: {
		textTransform: 'uppercase',
		fontWeight: '300',
		fontSize: 16,
	},
	link: {
		textTransform: 'uppercase',
		fontWeight: '400',
		fontSize: 12,
		color: colors.link,
	},
	accountText: {
		textTransform: 'uppercase',
		fontWeight: '400',
		fontSize: 12,
	},
	logo: {
		width: 150,
		height: 150,
		alignSelf: 'center',
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		textTransform: 'uppercase',
		fontWeight: '700',
	},
	input: {
		borderWidth: 0.5,
		borderColor: colors.greyText,
		marginTop: 5,
		height: 40,
		borderRadius: 5,
		fontSize: 16,
		paddingHorizontal: 10,
	},
	inputContainer: {
		marginTop: 15,
	},
	socialAuthContainer: {
		marginTop: 30,
		marginBottom: 60,
		borderTopWidth: 0.5,
		borderColor: colors.greyText,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
	},
});
