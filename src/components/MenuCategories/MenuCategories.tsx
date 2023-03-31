import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';

import { menuCategories, responsiveFontSize } from '../../utils';
import { styles } from './MenuCategories.style';

interface Props {
	active: string;
	setActive: (cat: string) => void;
}

const MenuCategories = ({ active, setActive }: Props) => {
	const { width } = useWindowDimensions();
	const categoryStyle = (cat: string) => {
		if (active === cat) return styles.textCategoriesActive;
		return styles.textCategoriesInactive;
	};

	return (
		<View style={styles.categories}>
			<TouchableOpacity onPress={() => setActive(menuCategories[1])}>
				<Text style={{ ...categoryStyle(menuCategories[1]), ...responsiveFontSize(16, width) }}>
					Account
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(menuCategories[2])}>
				<Text style={{ ...categoryStyle(menuCategories[2]), ...responsiveFontSize(16, width) }}>
					Address
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(menuCategories[3])}>
				<Text style={{ ...categoryStyle(menuCategories[3]), ...responsiveFontSize(16, width) }}>
					Orders
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MenuCategories;
