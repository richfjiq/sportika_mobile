import { useMemo, useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Categories, Header, ImageCategory, ProductsCard } from '../../components';
import { useProducts } from '../../store/products/hooks';
import { colors } from '../../theme/appTheme';
import { categories } from '../../utils';
import { styles } from './Menu.style';

const Menu = () => {
	const [activeCategory, setActiveCategory] = useState(categories[1]);
	const { allProducts } = useProducts();

	const productsByCategory = useMemo(
		() => allProducts.filter((product) => product.gender.toLowerCase() === activeCategory),
		[allProducts, activeCategory],
	);

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
			<ProductsCard products={productsByCategory} />
		</ScrollView>
	);
};

export default Menu;
