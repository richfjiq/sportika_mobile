import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerCategory: {
		paddingTop: 10,
	},
	image: {
		width: '100%',
		height: wp('65%'),
		resizeMode: 'cover',
	},
	textContainer: {
		position: 'absolute',
		width: '85%',
		height: wp('65%'),
		justifyContent: 'space-between',
	},
	textCategory: {
		backgroundColor: colors.white,
		textTransform: 'uppercase',
		marginVertical: 20,
		marginLeft: 20,
		paddingVertical: 5,
		paddingHorizontal: 10,
		fontSize: 14,
		fontWeight: '500',
	},
	textSubContainer: {
		alignItems: 'flex-start',
	},
});
