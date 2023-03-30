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
	},
	titleCategory: {
		backgroundColor: colors.cultured,
		textTransform: 'uppercase',
		marginVertical: 20,
		marginLeft: 16,
		paddingVertical: 5,
		paddingHorizontal: 10,
		fontSize: 18,
		fontWeight: '700',
		color: colors.darkCharcoal,
	},
	textCategory: {
		backgroundColor: colors.cultured,
		textTransform: 'uppercase',
		marginRight: 16,
		paddingVertical: 5,
		paddingHorizontal: 10,
		fontSize: 16,
		fontWeight: '500',
		color: colors.darkCharcoal,
	},
	titleSubContainer: {
		alignItems: 'flex-start',
	},
	textSubContainer: {
		alignItems: 'flex-end',
		paddingVertical: 20,
	},
});
