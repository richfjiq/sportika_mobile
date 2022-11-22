import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuStackParams } from '../../navigation/MenuStackNav';
import { useProducts } from '../../store/products/hooks';
import { ImageCarousel, ItemQuantity, Loading, SizeSelector } from '../../components';
import { colors } from '../../theme/appTheme';
import { styles } from './ProductDetails.style';
import { Gender, ICartProduct, ISize } from '../../interfaces';

interface Props extends StackScreenProps<MenuStackParams, 'ProductDetails'> {}

const ProductDetails = ({ route, navigation }: Props) => {
	const { loading, product, getProductBySlug } = useProducts();
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

	const onSelectedSize = (size: ISize) => {
		setTempCartProducts((prevState) => ({ ...prevState, size }));
	};

	const updateQuantity = (quantity: number) => {
		setTempCartProducts((prevState) => ({ ...prevState, quantity }));
	};

	if (loading) return <Loading modalVisible={loading} />;

	return (
		<ScrollView
			style={{ paddingTop: top, ...styles.container }}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>{product?.title}</Text>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon name={'close-outline'} size={28} color={colors.black} />
				</TouchableOpacity>
			</View>

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

				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
					<Text style={styles.buttonText}>Add to cart</Text>
					<Icon name={'add-outline'} size={20} color={colors.white} />
				</TouchableOpacity>
				<Text style={styles.subHeader}>Description</Text>
				<Text style={styles.description}>{product?.description}</Text>
			</View>
		</ScrollView>
	);
};

export default ProductDetails;
