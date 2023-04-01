import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: wp('70%'),
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 5,
		borderWidth: 3,
		borderColor: colors.cultured,
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 18,
		fontWeight: '700',
		color: colors.cultured,
	},
	imageBg: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	phraseContainer: {
		alignItems: 'flex-start',
		marginBottom: 20,
	},
	containerText: {
		alignSelf: 'flex-end',
		backgroundColor: colors.cultured,
		color: colors.darkCharcoal,
		borderColor: colors.cultured,
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	phraseText: {
		fontSize: 18,
		paddingVertical: 10,
		paddingHorizontal: 15,
		textTransform: 'uppercase',
		fontWeight: '700',
		color: colors.darkCharcoal,
	},
	text: {
		fontSize: 16,
		paddingHorizontal: 15,
		paddingVertical: 10,
		textTransform: 'uppercase',
		fontWeight: '500',
		color: colors.darkCharcoal,
	},
	subContainer: {
		paddingVertical: 40,
		paddingHorizontal: wp('3.72%'),
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	separator: {
		borderWidth: 1,
		borderColor: colors.inactiveGrey,
	},
});
