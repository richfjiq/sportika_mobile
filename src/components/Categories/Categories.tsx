import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { categories } from '../../utils';
import { styles } from './Categories.style';

interface Props {
	active: string;
	setActive: (cat: string) => void;
}

const Categories = ({ active, setActive }: Props) => {
	const categoryStyle = (cat: string) => {
		if (active === cat) return styles.textCategoriesActive;
		return styles.textCategoriesInactive;
	};

	return (
		<View style={styles.categories}>
			<TouchableOpacity onPress={() => setActive(categories[1])}>
				<Text style={categoryStyle(categories[1])}>Women</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(categories[2])}>
				<Text style={categoryStyle(categories[2])}>Men</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(categories[3])}>
				<Text style={categoryStyle(categories[3])}>Girls</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(categories[4])}>
				<Text style={categoryStyle(categories[4])}>Boys</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Categories;
