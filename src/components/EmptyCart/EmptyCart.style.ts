import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	bodyContainer: {
		height: '88%',
		justifyContent: 'center',
		borderTopWidth: 1,
		alignItems: 'center',
		borderTopColor: colors.inactiveGrey,
		paddingHorizontal: 16,
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
		marginTop: 25,
		borderRadius: 5,
		elevation: 15,
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
	text: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '400',
		color: colors.darkCharcoal,
	},
});
