import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingTop: 20,
		flex: 1,
	},
	warningContainer: {
		paddingHorizontal: 16,
		paddingBottom: 20,
		alignItems: 'center',
	},
	warningText: {
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.red,
		fontSize: 14,
	},
	rowContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: colors.crocodileTooth,
	},
	orderContainer: {
		width: '18%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	statusContainer: {
		width: '26%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	dateContainer: {
		width: '28%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	detailsContainer: {
		width: '28%',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
	},
	noOrders: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	noOrdersText: {
		textTransform: 'uppercase',
		fontWeight: '500',
		fontSize: 16,
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
