import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingBottom: 10,
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: colors.darkCharcoal,
	},
});
