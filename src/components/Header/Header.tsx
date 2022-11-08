import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './Header.style';

const Header = () => {
	const { top } = useSafeAreaInsets();

	console.log(top);
	const value = 'Hello';

	return (
		<View style={{ ...styles.container, marginTop: top }}>
			<Text style={styles.headerText}>Sportika</Text>
			<View style={styles.searchContainer}>
				<TouchableOpacity>
					<Icon name={'search-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon name={'person-circle-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;
