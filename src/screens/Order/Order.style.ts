import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		paddingHorizontal: 16,
		marginVertical: 10,
		flexDirection: 'row',
	},
	bodyContainer: {
		paddingHorizontal: 16,
		flex: 1,
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
	buttonCenter: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
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
		marginBottom: 40,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
	activityIndicator: {
		alignSelf: 'center',
	},
	separator: {
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
	},
});
