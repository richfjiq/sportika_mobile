import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuStackParams } from '../../navigation/MenuStackNav';
import { useCart, useProducts } from '../../store';
import { ImageCarousel, ItemQuantity, Loading, SizeSelector } from '../../components';
import { colors } from '../../theme/appTheme';
import { styles } from './ProductDetails.style';
import { Gender, ICartProduct, ISize } from '../../interfaces';

interface Props extends StackScreenProps<MenuStackParams, 'ProductDetails'> {}

const ProductDetails = ({ route, navigation }: Props) => {
	const { loading, product, getProductBySlug } = useProducts();
	const { addProductToCart } = useCart();
	const [tempCartProducts, setTempCartProducts] = useState<ICartProduct>({
		_id: product?._id as string,
		image: product?.images[0] as string,
		price: product?.price as number,
		size: undefined,
		slug: product?.slug as string,
		title: product?.title as string,
		gender: product?.gender as Gender,
		quantity: 1,
	});
	const { slug } = route.params;
	const { top } = useSafeAreaInsets();

	useEffect(() => {
		if (slug) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getProductBySlug(slug);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (product) {
			setTempCartProducts({
				_id: product._id,
				image: product.images[0],
				price: product.price,
				size: undefined,
				slug: product.slug,
				title: product.title,
				gender: product.gender,
				quantity: 1,
			});
		}
	}, [product]);

	const onSelectedSize = (size: ISize) => {
		setTempCartProducts((prevState) => ({ ...prevState, size }));
	};

	const updateQuantity = (quantity: number) => {
		setTempCartProducts((prevState) => ({ ...prevState, quantity }));
	};

	const onAddProduct = async () => {
		if (!tempCartProducts.size) return;
		await addProductToCart(tempCartProducts);
		navigation.navigate('CartStack' as never, { screen: 'Home' } as never);
	};

	if (loading) return <Loading modalVisible={loading} />;

	return (
		<View style={{ paddingTop: Platform.OS === 'ios' ? top : 10, ...styles.container }}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>{product?.title}</Text>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon name={'close-outline'} size={28} color={colors.black} />
				</TouchableOpacity>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageCarousel data={product?.images as string[]} />

				<View style={styles.infoContainer}>
					<Text style={styles.infoTitle}>{product?.title}</Text>
					<Text style={styles.infoPrice}>$ {product?.price}</Text>

					<ItemQuantity quantity={tempCartProducts.quantity} updateQuantity={updateQuantity} />

					<SizeSelector
						selectedSize={tempCartProducts.size}
						sizes={product?.sizes as ISize[]}
						onSelectedSize={onSelectedSize}
					/>

					<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onAddProduct}>
						<Text style={styles.buttonText}>
							{tempCartProducts.size ? 'Add to cart' : 'Choose a size'}
						</Text>
						<Icon name={'add-outline'} size={20} color={colors.white} />
					</TouchableOpacity>
					<Text style={styles.subHeader}>Description</Text>
					<Text style={styles.description}>{product?.description}</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default ProductDetails;
