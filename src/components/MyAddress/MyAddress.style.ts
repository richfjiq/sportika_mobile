import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	addressContainer: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		borderRadius: 5,
		padding: 15,
	},
	addressHeader: {
		fontSize: 16,
		fontWeight: '700',
		textTransform: 'uppercase',
		color: colors.darkCharcoal,
	},
	addressText: {
		fontSize: 16,
		fontWeight: '400',
		textTransform: 'uppercase',
		marginTop: 2,
	},
	container: {
		padding: 16,
		flex: 1,
	},
	containerNoAddress: {
		padding: 16,
		display: 'flex',
		justifyContent: 'center',
		flex: 1,
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
		marginTop: 25,
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.cultured,
	},
	editText: {
		fontSize: 14,
		fontWeight: '400',
		textTransform: 'uppercase',
		color: colors.link,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
