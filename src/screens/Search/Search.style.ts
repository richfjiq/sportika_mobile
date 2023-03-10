import { StyleSheet } from 'react-native';

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
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});
