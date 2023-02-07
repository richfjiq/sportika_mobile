import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';

import { categories, responsiveFontSize } from '../../utils';
import { styles } from './Categories.style';

interface Props {
	active: string;
	setActive: (cat: string) => void;
}

const Categories = ({ active, setActive }: Props) => {
	const { width } = useWindowDimensions();
	const categoryStyle = (cat: string) => {
		if (active === cat) return styles.textCategoriesActive;
		return styles.textCategoriesInactive;
	};

	return (
		<View style={styles.categories}>
			<TouchableOpacity onPress={() => setActive(categories[1])}>
				<Text style={{ ...categoryStyle(categories[1]), ...responsiveFontSize(14, width) }}>
					Women
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(categories[2])}>
				<Text style={{ ...categoryStyle(categories[2]), ...responsiveFontSize(14, width) }}>
					Men
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(categories[3])}>
				<Text style={{ ...categoryStyle(categories[3]), ...responsiveFontSize(14, width) }}>
					Girls
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(categories[4])}>
				<Text style={{ ...categoryStyle(categories[4]), ...responsiveFontSize(14, width) }}>
					Boys
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Categories;
