import { useCallback, useEffect, useMemo, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Categories, Header, ImageCategory, ProductsCard, SearchInput } from '../../components';
import { useProducts } from '../../store';
import { categories } from '../../utils';
import { styles } from './Menu.style';
import { MenuStackParams } from '../../navigation/MenuStackNav';
import { IProduct } from '../../interfaces';

interface Props extends StackScreenProps<MenuStackParams, 'Menu'> {}

const Menu = ({ navigation }: Props) => {
	const [term, setTerm] = useState('');
	const [activeCategory, setActiveCategory] = useState(categories[1]);
	const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);
	const { allProducts } = useProducts();

	const productsByCategory = useMemo(() => {
		if (allProducts && allProducts.length > 0) {
			return allProducts?.filter((product) => product.gender.toLowerCase() === activeCategory);
		}

		return [];
	}, [allProducts, activeCategory]);

	const filterByTerm = useCallback(() => {
		if (term.length === 0) {
			return setProductsFiltered([]);
		}

		setProductsFiltered(
			(productsByCategory ?? []).filter(
				(product) =>
					product?.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
					product?.description.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
			),
		);
	}, [term, productsByCategory]);

	useEffect(() => {
		filterByTerm();
	}, [filterByTerm]);

	const goToDetails = (slug: string) => {
		navigation.navigate('ProductDetails', { slug });
	};

	return (
		<View style={styles.flex}>
			<Header title="Store" search={false} />
			<Categories active={activeCategory} setActive={setActiveCategory} />
			<SearchInput products={productsByCategory} onDebounce={(value: string) => setTerm(value)} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
				{term ? (
					<ProductsCard products={productsFiltered} goToDetails={goToDetails} />
				) : (
					<>
						<ImageCategory category={activeCategory} />
						<ProductsCard products={productsByCategory} goToDetails={goToDetails} />
					</>
				)}
			</ScrollView>
		</View>
	);
};

export default Menu;
