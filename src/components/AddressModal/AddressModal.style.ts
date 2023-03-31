import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 25,
		marginBottom: 15,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '700',
		color: colors.cultured,
	},
	messageContainer: {
		width: '80%',
		backgroundColor: colors.cultured,
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 40,
		zIndex: 10,
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
		textAlign: 'center',
	},
});
