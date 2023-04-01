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
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	cardContainer: {
		width: '47%',
		height: wp('47%'),
		borderWidth: 0.5,
		borderColor: colors.crocodileTooth,
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
		backgroundColor: colors.darkCharcoal,
		color: colors.cultured,
		alignSelf: 'flex-start',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 5,
		overflow: 'hidden',
		fontSize: 16,
	},
	textPrice: {
		backgroundColor: colors.darkCharcoal,
		color: colors.cultured,
		alignSelf: 'flex-end',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 5,
		overflow: 'hidden',
		fontSize: 16,
	},
	noProductsContainer: {
		paddingHorizontal: 16,
		alignItems: 'center',
		width: '100%',
	},
	text: {
		fontSize: 18,
		fontWeight: '500',
		color: colors.darkCharcoal,
		textTransform: 'uppercase',
	},
});
