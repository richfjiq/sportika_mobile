import { View, Text, TouchableOpacity, Image, Platform, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './Header.style';
import { useAuth } from '../../store';
import { responsiveFontSize, responsiveIcon, headerIconsContainer, logoHeader } from '../../utils';

interface Props {
	title: string;
	search?: boolean;
}

const Header = ({ title, search = true }: Props) => {
	const { width } = useWindowDimensions();
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
		<View style={{ ...styles.container, marginTop: Platform.OS === 'ios' ? top : 10 }}>
			{title === 'Sportika' ? (
				<Image
					style={{ ...styles.logo, ...logoHeader(100, 45, width) }}
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672172814/sportika/umqc76hrwnckyxwwiy2z.png',
					}}
				/>
			) : (
				<Text style={{ ...styles.headerText, ...responsiveFontSize(20, width) }}>{title}</Text>
			)}
			<View
				style={search ? { ...styles.searchContainer, ...headerIconsContainer(70, width) } : null}
			>
				{search && (
					<TouchableOpacity onPress={goToSearchScreen}>
						<Icon name={'search-outline'} size={responsiveIcon(24, width)} color={colors.black} />
					</TouchableOpacity>
				)}

				<TouchableOpacity onPress={loginOrAccount}>
					<Icon
						name={'person-circle-outline'}
						size={responsiveIcon(24, width)}
						color={colors.black}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;
