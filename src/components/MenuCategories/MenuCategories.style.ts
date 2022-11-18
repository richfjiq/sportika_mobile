import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	categories: {
		flexDirection: 'row',
		borderBottomWidth: 0.5,
		borderBottomColor: colors.inactiveGrey,
		paddingVertical: 15,
		paddingHorizontal: 10,
		justifyContent: 'space-around',
	},
	textCategoriesActive: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	textCategoriesInactive: {
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.greyText,
	},
});
