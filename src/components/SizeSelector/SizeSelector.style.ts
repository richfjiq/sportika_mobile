import { StyleSheet } from 'react-native';
import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	sizeContainer: {
		width: 60,
		alignItems: 'center',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	sizeContainerSelected: {
		width: 60,
		alignItems: 'center',
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: colors.black,
		borderRadius: 20,
	},
	subHeader: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '500',
		marginBottom: 5,
	},
	size: {
		fontSize: 20,
		textTransform: 'uppercase',
		fontWeight: '400',
	},
	sizeSelected: {
		fontSize: 20,
		textTransform: 'uppercase',
		fontWeight: '400',
		color: colors.white,
	},
});
