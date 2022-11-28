import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { Loading, MenuCategories, MyAccount, MyOrders } from '../../components';
import { MyAddress } from '../../components/MyAddress';
import { useAuth, useUser } from '../../store';
import { colors } from '../../theme/appTheme';
import { menuCategories } from '../../utils';
import { styles } from './UserAccount.style';

const UserAccount = () => {
	const [activeCategory, setActiveCategory] = useState(menuCategories[1]);
	const { top } = useSafeAreaInsets();
	const { logout, user } = useAuth();
	const { getUserAddress, loading } = useUser();

	useEffect(() => {
		if (user) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getUserAddress(user._id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const renderComponent = () => {
		switch (activeCategory) {
			case 'address':
				return <MyAddress />;
			case 'orders':
				return <MyOrders />;
			default:
				return <MyAccount />;
		}
	};

	return (
		<View style={{ paddingTop: top, ...styles.container }}>
			<View style={styles.headerRow}>
				<Text style={styles.headerText}>{`Hi ${user?.name ?? ''}`}</Text>
				<TouchableOpacity onPress={logout}>
					<Icon name={'log-out-outline'} size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
			<MenuCategories active={activeCategory} setActive={setActiveCategory} />
			{renderComponent()}
			<Loading modalVisible={loading} />
		</View>
	);
};

export default UserAccount;
