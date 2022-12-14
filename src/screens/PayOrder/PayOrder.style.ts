import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 40,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 16,
	},
	headerRow: {
		flexDirection: 'row',
	},
	headerText: {
		fontSize: 16,
		fontWeight: '300',
		textTransform: 'uppercase',
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	divider: {
		borderWidth: 0.5,
		borderColor: colors.inactiveGrey,
	},
	scrollContainer: {
		paddingTop: 15,
		paddingHorizontal: 16,
	},
	button: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
	},
	buttonCenter: {
		backgroundColor: colors.black,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
});
