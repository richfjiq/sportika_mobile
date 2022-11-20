import { useEffect, useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sportikaApi from '../../api/sportikaApi';

import { Categories, Header, ImageCategory } from '../../components';
import { colors } from '../../theme/appTheme';
import { categories } from '../../utils';
import { styles } from './Menu.style';

const Menu = () => {
	const [activeCategory, setActiveCategory] = useState(categories[1]);

	const getProducts = async () => {
		try {
			const products = await sportikaApi.get('/products');
			// eslint-disable-next-line no-console
			console.log(products);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getProducts();
	}, []);

	return (
		<ScrollView>
			<Header title="Store" search={false} />
			<Categories active={activeCategory} setActive={setActiveCategory} />
			<View style={styles.searchContainer}>
				<View>
					<View style={styles.searchIcon}>
						<Icon name={'search-outline'} size={24} color={colors.greyText} />
					</View>
					<TextInput style={styles.searchInput} />
				</View>
			</View>
			<ImageCategory category={activeCategory} />
		</ScrollView>
	);
};

export default Menu;
