import { StyleSheet } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	button: {
		backgroundColor: colors.white,
		width: wp('70%'),
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
	},
	imageBg: {
		height: hp('80%'),
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	phraseContainer: {
		alignItems: 'flex-start',
		marginBottom: 20,
	},
	phraseText: {
		padding: 5,
		backgroundColor: 'white',
		textTransform: 'uppercase',
		fontWeight: '500',
	},
	subContainer: {
		paddingVertical: 40,
	},
	separator: {
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
	},
});
