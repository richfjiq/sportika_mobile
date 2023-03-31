import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 18,
		fontWeight: '700',
		textTransform: 'uppercase',
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: '400',
		textTransform: 'uppercase',
	},
	divider: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
	},
	scrollContainer: {
		paddingTop: 15,
		paddingHorizontal: 16,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 20,
	},
	buttonCenter: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 20,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '700',
		color: colors.cultured,
	},
});
