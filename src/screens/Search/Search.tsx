import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './Search.style';
import { ProductsCard, SearchInput } from '../../components';
import { useProducts } from '../../store';
import { colors } from '../../theme/appTheme';
import { IProduct } from '../../interfaces';
import { StackScreenProps } from '@react-navigation/stack';
import { MenuStackParams } from '../../navigation/MenuStackNav';
import { responsiveFontSize, responsiveIcon } from '../../utils';

interface Props extends StackScreenProps<MenuStackParams, 'Search'> {}

const Search = ({ navigation }: Props) => {
	const { width } = useWindowDimensions();
	const { top } = useSafeAreaInsets();
	const [term, setTerm] = useState('');
	const { allProducts } = useProducts();
	const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);

	const filterByTerm = useCallback(() => {
		if (term.length === 0) {
			return setProductsFiltered([]);
		}

		setProductsFiltered(
			(allProducts ?? []).filter(
				(product) =>
					product?.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
					product?.description.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
			),
		);
	}, [term, allProducts]);

	useEffect(() => {
		filterByTerm();
	}, [filterByTerm]);

	const goToDetails = (slug: string) => {
		navigation.navigate('ProductDetails', { slug });
	};

	return (
		<View style={{ ...styles.container, marginTop: top }}>
			<View style={styles.header}>
				<Text style={{ ...styles.headerText, ...responsiveFontSize(20, width) }}>
					Search Products
				</Text>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon
						name={'close-circle-outline'}
						size={responsiveIcon(25, width)}
						color={colors.black}
					/>
				</TouchableOpacity>
			</View>
			<SearchInput products={allProducts} onDebounce={(value: string) => setTerm(value)} />
			<ScrollView>
				{term ? (
					<ProductsCard products={productsFiltered} goToDetails={goToDetails} />
				) : (
					<ProductsCard products={allProducts} goToDetails={goToDetails} />
				)}
			</ScrollView>
		</View>
	);
};

export default Search;
