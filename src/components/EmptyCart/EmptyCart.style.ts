import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	bodyContainer: {
		height: '88%',
		justifyContent: 'center',
		borderTopWidth: 0.5,
		alignItems: 'center',
		borderTopColor: colors.greyText,
	},
	button: {
		backgroundColor: colors.black,
		width: wp('70%'),
		paddingHorizontal: 10,
		paddingVertical: 5,
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
});
