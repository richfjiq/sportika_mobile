import { View, Text, ImageBackground } from 'react-native';
import { IProduct } from '../../interfaces';
import { styles } from './ProductsCard.style';

interface Props {
	products: IProduct[];
}

const ProductsCard = ({ products }: Props) => {
	return (
		<View style={styles.container}>
			{products.map((item) => (
				<View key={item.slug} style={styles.cardContainer}>
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
				</View>
			))}
		</View>
	);
};

export default ProductsCard;
