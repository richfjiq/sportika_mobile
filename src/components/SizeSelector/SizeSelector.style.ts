import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	subHeader: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
		marginBottom: 5,
	},
	selectContainer: {
		width: '50%',
	},
	selectInput: {
		marginTop: 5,
		height: Platform.OS === 'android' ? 45 : 40,
		borderRadius: 5,
	},
});
