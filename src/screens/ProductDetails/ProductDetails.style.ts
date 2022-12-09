import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: 25,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	infoContainer: {
		flex: 1,
		padding: 16,
		marginBottom: 10,
	},
	infoTitle: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
		marginBottom: 5,
	},
	description: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '300',
		marginBottom: 5,
	},
	infoPrice: {
		fontSize: 16,
		fontWeight: '700',
		marginBottom: 10,
	},
	subHeader: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
		marginBottom: 5,
	},
});
