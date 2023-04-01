import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: 25,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		elevation: 15,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '500',
		color: colors.cultured,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 5,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '600',
		textTransform: 'uppercase',
		width: '90%',
		color: colors.darkCharcoal,
	},
	infoContainer: {
		flex: 1,
		padding: 16,
		marginBottom: 10,
	},
	infoTitle: {
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: '600',
		marginBottom: 5,
		color: colors.darkCharcoal,
	},
	description: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '400',
		marginBottom: 5,
		color: colors.darkCharcoal,
	},
	infoPrice: {
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 10,
		color: colors.darkCharcoal,
	},
	subHeader: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '600',
		marginBottom: 5,
		color: colors.darkCharcoal,
	},
});
