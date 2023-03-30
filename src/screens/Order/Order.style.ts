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
		fontWeight: 'bold',
		fontSize: 18,
		color: colors.darkCharcoal,
	},
	titleBold: {
		textTransform: 'uppercase',
		fontWeight: '400',
		fontSize: 16,
		color: colors.darkCharcoal,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
		borderRadius: 5,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
	buttonCenter: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
		borderRadius: 5,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
	buttonLater: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 40,
		borderRadius: 5,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '700',
		color: colors.cultured,
	},
	activityIndicator: {
		alignSelf: 'center',
	},
	separator: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
	},
});
