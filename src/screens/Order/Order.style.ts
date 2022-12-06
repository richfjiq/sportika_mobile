import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	headerContainer: {
		marginVertical: 10,
		flexDirection: 'row',
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: '300',
		fontSize: 16,
	},
	titleBold: {
		textTransform: 'uppercase',
		fontWeight: '500',
		fontSize: 16,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
	},
	buttonLater: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 100,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
});
