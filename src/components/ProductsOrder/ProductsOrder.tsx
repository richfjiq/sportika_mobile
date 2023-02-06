import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';

import { useOrders } from '../../store';
import { imgHeightProductsOrder } from '../../utils';
import { styles } from './ProductsOrder.style';

const ProductsOrder = () => {
	const { order } = useOrders();
	const { width } = useWindowDimensions();

	if (!order) return null;

	const { orderItems } = order;

	return (
		<View style={styles.itemsContainer}>
			{orderItems.map((item) => (
				<View key={`${item.slug}-${item.size}`} style={styles.itemRowContainer}>
					<TouchableOpacity style={styles.imageContainer} activeOpacity={0.7}>
						<Image
							source={{ uri: `${item.image}` }}
							style={{ ...styles.image, ...imgHeightProductsOrder(width) }}
						/>
					</TouchableOpacity>
					<View style={styles.detailsContainer}>
						<View style={styles.rowPrice}>
							<Text style={styles.priceText}>$ {`${item.price}`}</Text>
						</View>
						<Text style={styles.itemText}>{item.title}</Text>
						<View style={styles.rowSize}>
							<Text style={styles.itemText}>Size: </Text>
							<Text style={styles.itemText}>{item.size}</Text>
						</View>
						<View style={styles.quantityRow}>
							<Text style={styles.itemText}>Quantity: </Text>
							<Text style={styles.itemText}>{item.quantity}</Text>
						</View>
					</View>
				</View>
			))}
		</View>
	);
};

export default ProductsOrder;
