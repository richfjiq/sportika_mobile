import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		padding: 16,
		paddingBottom: 32,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	cardContainer: {
		width: '47%',
		height: wp('47%'),
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
		marginBottom: 16,
		borderRadius: 8,
		overflow: 'hidden',
	},
	imageBG: {
		flex: 1,
	},
	textContainer: {
		flex: 1,
		padding: 7,
		justifyContent: 'space-between',
	},
	textTitle: {
		backgroundColor: colors.white,
		color: colors.black,
		alignSelf: 'flex-start',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 5,
		overflow: 'hidden',
	},
	textPrice: {
		backgroundColor: colors.white,
		color: colors.black,
		alignSelf: 'flex-end',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 5,
		overflow: 'hidden',
	},
});
