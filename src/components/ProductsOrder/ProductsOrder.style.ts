import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	itemsContainer: {
		marginTop: 25,
	},
	itemRowContainer: {
		flexDirection: 'row',
		width: '100%',
		marginBottom: 16,
	},
	imageContainer: {
		width: '30%',
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	image: {
		width: '100%',
		height: wp('30%'),
		borderRadius: 5,
		overflow: 'hidden',
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
	},
	detailsContainer: {
		flex: 1,
		paddingLeft: 10,
	},
	rowPrice: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	rowSize: {
		flexDirection: 'row',
	},
	priceText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '600',
	},
	itemText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
		marginBottom: 2,
	},
	removeText: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.link,
	},
	quantityRow: {
		flexDirection: 'row',
	},
});
