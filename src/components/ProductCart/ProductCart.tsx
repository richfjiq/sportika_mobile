import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ICartProduct } from '../../interfaces';
import { useCart } from '../../store';
import { ItemQuantity } from '../ItemQuantity';
import { styles } from './ProductCart.style';

interface Props {
	product: ICartProduct;
	onUpdateProductQuantity: (product: ICartProduct, newQuantityValue: number) => void;
	checkout?: boolean;
}

const ProductCart = ({ product, onUpdateProductQuantity, checkout = false }: Props) => {
	const { removeProductFromCart } = useCart();

	return (
		<View key={product.slug} style={styles.itemRowContainer}>
			<TouchableOpacity style={styles.imageContainer} activeOpacity={0.7}>
				<Image source={{ uri: `${product.image}` }} style={styles.image} />
			</TouchableOpacity>
			<View style={styles.detailsContainer}>
				<View style={styles.rowPrice}>
					<Text style={styles.priceText}>$ {`${product.price}`}</Text>
					{!checkout && (
						<TouchableOpacity onPress={() => removeProductFromCart(product)}>
							<Text style={styles.removeText}>Remove</Text>
						</TouchableOpacity>
					)}
				</View>
				<Text style={styles.itemText}>{product.title}</Text>
				<View style={styles.rowSize}>
					<Text style={styles.itemText}>Size: </Text>
					<Text style={styles.itemText}>{product.size}</Text>
				</View>
				{checkout ? (
					<View style={styles.quantityRow}>
						<Text style={styles.itemText}>Quantity: </Text>
						<Text style={styles.itemText}>{product.quantity}</Text>
					</View>
				) : (
					<ItemQuantity
						quantity={product.quantity}
						updateQuantity={(value) => {
							onUpdateProductQuantity(product, value);
						}}
						cart={true}
					/>
				)}
			</View>
		</View>
	);
};

export default ProductCart;
