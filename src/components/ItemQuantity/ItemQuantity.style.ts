import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	subHeader: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
		marginBottom: 5,
	},
	quantity: {
		width: '25%',
		textAlign: 'center',
		fontSize: 20,
	},
	quantityContainer: {
		flexDirection: 'row',
		width: wp('30%'),
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	},
	subHeaderCart: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '400',
		marginBottom: 5,
	},
	quantityCart: {
		width: '25%',
		textAlign: 'center',
		fontSize: 14,
	},
	quantityContainerCart: {
		flexDirection: 'row',
		width: wp('20%'),
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 5,
	},
});
