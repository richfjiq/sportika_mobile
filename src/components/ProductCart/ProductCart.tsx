import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ICartProduct } from '../../interfaces';
import { ItemQuantity } from '../ItemQuantity';
import { styles } from './ProductCart.style';

interface Props {
	product: ICartProduct;
	onUpdateProductQuantity: (product: ICartProduct, newQuantityValue: number) => void;
}

const ProductCart = ({ product, onUpdateProductQuantity }: Props) => {
	return (
		<View key={product.slug} style={styles.itemRowContainer}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: `${product.image}` }} style={styles.image} />
			</View>
			<View style={styles.detailsContainer}>
				<View style={styles.rowPrice}>
					<Text style={styles.priceText}>$ {`${product.price}`}</Text>
					<TouchableOpacity>
						<Text style={styles.removeText}>Remove</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.itemText}>{product.title}</Text>
				<View style={styles.rowSize}>
					<Text style={styles.itemText}>Size: </Text>
					<Text style={styles.itemText}>{product.size}</Text>
				</View>
				<ItemQuantity
					quantity={product.quantity}
					updateQuantity={(value) => {
						onUpdateProductQuantity(product, value);
					}}
					cart={true}
				/>
			</View>
		</View>
	);
};

export default ProductCart;
