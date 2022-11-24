import { StyleSheet } from 'react-native';
import { colors } from '../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 10,
		backgroundColor: colors.black,
		height: 16,
		width: 16,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		right: -6,
		top: -4,
	},
	text: {
		color: colors.white,
		fontSize: 8,
		fontWeight: '600',
	},
});
