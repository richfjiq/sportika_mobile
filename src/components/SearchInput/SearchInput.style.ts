import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	searchContainer: {
		borderTopWidth: 0.5,
		borderTopColor: colors.inactiveGrey,
		paddingVertical: 20,
		paddingHorizontal: 20,
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
		paddingHorizontal: 35,
		fontSize: 16,
	},
	searchInput: {
		height: 30,
		paddingHorizontal: 35,
		fontSize: 16,
	},
	inputContainerAndroid: {
		borderWidth: 1,
		borderColor: colors.inactiveGrey,
		height: 40,
		justifyContent: 'center',
		borderRadius: 10,
	},
	inputContainer: {
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
		height: 40,
		justifyContent: 'center',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
