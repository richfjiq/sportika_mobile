import { StyleSheet } from 'react-native';

import { colors } from '../../theme/appTheme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 18,
		fontWeight: '700',
		textTransform: 'uppercase',
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: '400',
		textTransform: 'uppercase',
	},
	divider: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
	},
	scrollContainer: {
		paddingTop: 15,
		paddingHorizontal: 16,
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
		marginTop: 20,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	buttonCenter: {
		backgroundColor: colors.darkCharcoal,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 20,
		shadowColor: colors.darkCharcoal,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 3,
		borderRadius: 5,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontSize: 16,
		fontWeight: '700',
		color: colors.cultured,
	},
	testingDataContainer: {
		borderWidth: 1,
		borderColor: colors.crocodileTooth,
		borderRadius: 10,
		padding: 16,
		marginTop: 20,
	},
	titleData: {
		fontSize: 16,
		textTransform: 'uppercase',
		color: colors.radiantYellow,
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: 10,
	},
	textData: {
		fontSize: 16,
		textTransform: 'uppercase',
		color: colors.radiantYellow,
		fontWeight: '400',
		marginBottom: 5,
	},
});
