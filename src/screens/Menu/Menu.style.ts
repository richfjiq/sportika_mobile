import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	searchContainer: {
		borderTopWidth: 0.5,
		borderTopColor: colors.inactiveGrey,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	searchIcon: {
		position: 'absolute',
		height: 30,
		justifyContent: 'center',
	},
	searchInput: {
		height: 30,
		paddingHorizontal: 30,
		fontSize: 16,
	},
});
