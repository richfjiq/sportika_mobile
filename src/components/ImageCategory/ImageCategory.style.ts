import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerCategory: {
		paddingTop: 0,
	},
	image: {
		width: '100%',
		height: wp('65%'),
		resizeMode: 'cover',
	},
	textContainer: {
		position: 'absolute',
		width: '100%',
		height: wp('65%'),
		justifyContent: 'space-between',
		padding: 16,
	},
	titleCategory: {
		textTransform: 'uppercase',
		fontSize: 18,
		fontWeight: '700',
		color: colors.darkCharcoal,
	},
	textCategory: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '500',
		color: colors.darkCharcoal,
	},
	titleSubContainer: {
		backgroundColor: colors.cultured,
		paddingVertical: 7,
		paddingHorizontal: 14,
		alignSelf: 'flex-start',
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	phraseText: {
		backgroundColor: colors.cultured,
		paddingVertical: 7,
		paddingHorizontal: 14,
		alignSelf: 'flex-end',
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	textSubContainer: {
		alignItems: 'flex-end',
		paddingVertical: 20,
	},
});
