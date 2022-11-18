import { View, Text, TouchableOpacity } from 'react-native';

import { menuCategories } from '../../utils';
import { styles } from './MenuCategories.style';

interface Props {
	active: string;
	setActive: (cat: string) => void;
}

const MenuCategories = ({ active, setActive }: Props) => {
	const categoryStyle = (cat: string) => {
		if (active === cat) return styles.textCategoriesActive;
		return styles.textCategoriesInactive;
	};

	return (
		<View style={styles.categories}>
			<TouchableOpacity onPress={() => setActive(menuCategories[1])}>
				<Text style={categoryStyle(menuCategories[1])}>Account</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(menuCategories[2])}>
				<Text style={categoryStyle(menuCategories[2])}>Address</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(menuCategories[3])}>
				<Text style={categoryStyle(menuCategories[3])}>Orders</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MenuCategories;
