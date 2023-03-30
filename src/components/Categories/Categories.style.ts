import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	categories: {
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: colors.crocodileTooth,
		paddingVertical: 15,
		paddingHorizontal: 10,
		justifyContent: 'space-around',
	},
	textCategoriesActive: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: colors.darkCharcoal,
	},
	textCategoriesInactive: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.greyText,
	},
});
