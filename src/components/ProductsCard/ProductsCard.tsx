import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { IProduct } from '../../interfaces';
import { styles } from './ProductsCard.style';

interface Props {
	products: IProduct[];
	goToDetails: (slug: string) => void;
}

const ProductsCard = ({ products, goToDetails }: Props) => {
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
							<Text style={styles.textPrice}>{`$ ${item.price}`}</Text>
							<Text style={styles.textTitle}>{item.title}</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default ProductsCard;
