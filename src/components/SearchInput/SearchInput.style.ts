import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	searchContainer: {
		borderTopWidth: 1,
		borderTopColor: colors.crocodileTooth,
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	searchIcon: {
		position: 'absolute',
		height: 30,
		justifyContent: 'center',
		left: 5,
	},
	closeIcon: {
		position: 'absolute',
		height: 30,
		justifyContent: 'center',
		right: 5,
		zIndex: 10,
	},
	searchInputAndroid: {
		height: 40,
		paddingHorizontal: 40,
		fontSize: 16,
	},
	searchInput: {
		height: 30,
		paddingHorizontal: 35,
		fontSize: 16,
	},
	inputContainerAndroid: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		height: 40,
		justifyContent: 'center',
		borderRadius: 10,
	},
	inputContainer: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		height: 40,
		justifyContent: 'center',
		borderRadius: 10,
	},
});
