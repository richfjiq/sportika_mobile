import { View, Text, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { IProduct } from '../../interfaces';
import { responsiveFontSize } from '../../utils';
import { styles } from './ProductsCard.style';

interface Props {
	products: IProduct[];
	goToDetails: (slug: string) => void;
}

const ProductsCard = ({ products, goToDetails }: Props) => {
	const { width } = useWindowDimensions();

	if (products.length === 0) {
		return (
			<View style={styles.container}>
				<View style={styles.noProductsContainer}>
					<Text style={styles.text}>Product/s not found</Text>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{products.map((item) => (
				<TouchableOpacity
					key={item.slug}
					style={styles.cardContainer}
					activeOpacity={0.6}
					onPress={() => goToDetails(item.slug)}
				>
					<ImageBackground
						source={{
							uri: `${item.images[0]}`,
						}}
						resizeMode="cover"
						style={styles.imageBG}
					>
						<View style={styles.textContainer}>
							<Text
								style={{ ...styles.textPrice, ...responsiveFontSize(16, width) }}
							>{`$ ${item.price}`}</Text>
							<Text style={{ ...styles.textTitle, ...responsiveFontSize(16, width) }}>
								{item.title}
							</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default ProductsCard;
