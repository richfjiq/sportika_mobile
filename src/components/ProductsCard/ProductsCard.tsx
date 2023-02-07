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
								style={{ ...styles.textPrice, ...responsiveFontSize(14, width) }}
							>{`$ ${item.price}`}</Text>
							<Text style={{ ...styles.textTitle, ...responsiveFontSize(14, width) }}>
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
