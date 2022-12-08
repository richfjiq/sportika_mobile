import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	addressContainer: {
		borderWidth: 0.5,
		borderColor: colors.greyText,
		borderRadius: 5,
		padding: 15,
	},
	addressHeader: {
		fontSize: 16,
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	addressText: {
		fontSize: 16,
		fontWeight: '300',
		textTransform: 'uppercase',
		marginTop: 2,
	},
	container: {
		padding: 16,
		flex: 1,
	},
	containerNoAddress: {
		padding: 16,
		display: 'flex',
		justifyContent: 'center',
		flex: 1,
	},
	button: {
		backgroundColor: colors.black,
		width: wp('70%'),
		paddingHorizontal: 10,
		paddingVertical: 10,
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
	editText: {
		fontSize: 14,
		fontWeight: '300',
		textTransform: 'uppercase',
		color: colors.link,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
