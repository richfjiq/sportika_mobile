import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuCategories, MyAccount } from '../../components';

import { useAuth } from '../../store/auth/hooks';
import { colors } from '../../theme/appTheme';
import { menuCategories } from '../../utils';
import { styles } from './UserAccount.style';

const UserAccount = () => {
	const [activeCategory, setActiveCategory] = useState(menuCategories[1]);
	const { top } = useSafeAreaInsets();
	const { logout, user } = useAuth();

	return (
		<View style={{ paddingTop: top, ...styles.container }}>
			<View style={styles.headerRow}>
				<Text style={styles.headerText}>{`Hi ${user?.name ?? ''}`}</Text>
				<TouchableOpacity onPress={logout}>
					<Icon name={'log-out-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
			<MenuCategories active={activeCategory} setActive={setActiveCategory} />
			<MyAccount />
		</View>
	);
};

export default UserAccount;
