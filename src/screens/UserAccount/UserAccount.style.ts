import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerRow: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderColor: colors.crocodileTooth,
	},
	headerText: {
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: '700',
		color: colors.darkCharcoal,
	},
	logoutText: {
		fontSize: 16,
		fontWeight: '400',
		textTransform: 'uppercase',
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
