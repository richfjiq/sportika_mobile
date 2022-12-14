import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './Header.style';
import { useAuth } from '../../store';

interface Props {
	title: string;
	search?: boolean;
}

const Header = ({ title, search = true }: Props) => {
	const { token } = useAuth();
	const { top } = useSafeAreaInsets();
	const navigator = useNavigation();

	const loginOrAccount = () => {
		if (token) {
			return navigator.navigate('UserStack' as never, { screen: 'UserAccount' } as never);
		}
		navigator.navigate('UserStack' as never, { screen: 'Login' } as never);
	};

	const goToSearchScreen = () => {
		navigator.navigate('MenuStack' as never, { screen: 'Search' } as never);
	};

	return (
		<View style={{ ...styles.container, marginTop: top }}>
			<Text style={styles.headerText}>{title}</Text>
			<View style={search ? styles.searchContainer : null}>
				{search && (
					<TouchableOpacity onPress={goToSearchScreen}>
						<Icon name={'search-outline'} size={24} color={colors.black} />
					</TouchableOpacity>
				)}

				<TouchableOpacity onPress={loginOrAccount}>
					<Icon name={'person-circle-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;
