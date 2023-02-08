import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

import { ICartProduct } from '../../interfaces';
import { useCart } from '../../store';
import { responsiveFontSize } from '../../utils';
import { ItemQuantity } from '../ItemQuantity';
import { styles } from './ProductCart.style';

interface Props {
	product: ICartProduct;
	onUpdateProductQuantity: (product: ICartProduct, newQuantityValue: number) => void;
	checkout?: boolean;
}

const ProductCart = ({ product, onUpdateProductQuantity, checkout = false }: Props) => {
	const { width } = useWindowDimensions();
	const { removeProductFromCart } = useCart();

	return (
		<View key={product.slug} style={styles.itemRowContainer}>
			<TouchableOpacity style={styles.imageContainer} activeOpacity={0.7}>
				<Image source={{ uri: `${product.image}` }} style={styles.image} />
			</TouchableOpacity>
			<View style={styles.detailsContainer}>
				<View style={styles.rowPrice}>
					<Text style={{ ...styles.priceText, ...responsiveFontSize(14, width) }}>
						$ {`${product.price}`}
					</Text>
					{!checkout && (
						<TouchableOpacity onPress={() => removeProductFromCart(product)}>
							<Text style={{ ...styles.removeText, ...responsiveFontSize(12, width) }}>Remove</Text>
						</TouchableOpacity>
					)}
				</View>
				<Text style={{ ...styles.itemText, ...responsiveFontSize(14, width) }}>
					{product.title}
				</Text>
				<View style={styles.rowSize}>
					<Text style={{ ...styles.itemText, ...responsiveFontSize(14, width) }}>Size: </Text>
					<Text style={{ ...styles.itemText, ...responsiveFontSize(14, width) }}>
						{product.size}
					</Text>
				</View>
				{checkout ? (
					<View style={styles.quantityRow}>
						<Text style={{ ...styles.itemText, ...responsiveFontSize(14, width) }}>Quantity: </Text>
						<Text style={{ ...styles.itemText, ...responsiveFontSize(14, width) }}>
							{product.quantity}
						</Text>
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
