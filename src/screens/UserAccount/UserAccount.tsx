import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuCategories, MyAccount, MyOrders } from '../../components';
import { MyAddress } from '../../components/MyAddress';
import { UserStackParams } from '../../navigation/UserStackNav';
import { useAuth, useCart, useOrders } from '../../store';
import { colors } from '../../theme/appTheme';
import { menuCategories } from '../../utils';
import { styles } from './UserAccount.style';

interface Props extends StackScreenProps<UserStackParams, 'UserAccount'> {}

const UserAccount = ({ route }: Props) => {
	const [activeCategory, setActiveCategory] = useState(menuCategories[1]);
	const { top } = useSafeAreaInsets();
	const { logout, user } = useAuth();
	const { resetOrderId } = useCart();
	const { resetOrder } = useOrders();
	const orderConfirmed = route.params?.orderConfirmed ?? false;

	useEffect(() => {
		if (orderConfirmed) {
			resetOrderId();
			resetOrder();
			setActiveCategory(menuCategories[3]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderConfirmed]);

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
		</View>
	);
};

export default UserAccount;
