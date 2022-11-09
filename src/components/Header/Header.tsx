import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './Header.style';

interface Props {
	title: string;
	search?: boolean;
}

const Header = ({ title, search = true }: Props) => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, marginTop: top }}>
			<Text style={styles.headerText}>{title}</Text>
			<View style={search ? styles.searchContainer : null}>
				{search && (
					<TouchableOpacity>
						<Icon name={'search-outline'} size={24} color={colors.black} />
					</TouchableOpacity>
				)}

				<TouchableOpacity>
					<Icon name={'person-circle-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;
