import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	searchContainer: {
		flexDirection: 'row',
		width: 70,
		justifyContent: 'space-between',
	},
	logo: {
		width: 80,
		height: 35,
	},
});
