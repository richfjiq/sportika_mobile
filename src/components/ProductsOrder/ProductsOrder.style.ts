import { StyleSheet } from 'react-native';
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
		borderWidth: 0.5,
		borderRadius: 5,
		borderColor: colors.crocodileTooth,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	image: {
		width: '100%',
		height: 100,
		borderRadius: 5,
		overflow: 'hidden',
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
