import { useMemo, useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

import { Categories, Header, ImageCategory, ProductsCard } from '../../components';
import { useProducts } from '../../store';
import { colors } from '../../theme/appTheme';
import { categories } from '../../utils';
import { styles } from './Menu.style';
import { MenuStackParams } from '../../navigation/MenuStackNav';

interface Props extends StackScreenProps<MenuStackParams, 'Menu'> {}

const Menu = ({ navigation }: Props) => {
	const [activeCategory, setActiveCategory] = useState(categories[1]);
	const { allProducts } = useProducts();

	const productsByCategory = useMemo(() => {
		if (allProducts && allProducts.length > 0) {
			return allProducts?.filter((product) => product.gender.toLowerCase() === activeCategory);
		}

		return [];
	}, [allProducts, activeCategory]);

	const goToDetails = (slug: string) => {
		navigation.navigate('ProductDetails', { slug });
	};

	return (
		<View style={styles.flex}>
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
			<View style={styles.separator} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
				<ImageCategory category={activeCategory} />
				<ProductsCard products={productsByCategory} goToDetails={goToDetails} />
			</ScrollView>
		</View>
	);
};

export default Menu;
