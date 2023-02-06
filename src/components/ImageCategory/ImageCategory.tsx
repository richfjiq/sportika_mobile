import { View, Text, Image, useWindowDimensions } from 'react-native';
import { categoryImage, catImgHeight } from '../../utils';

import { styles } from './ImageCategory.style';

interface Props {
	category: string;
}

const ImageCategory = ({ category }: Props) => {
	const { width } = useWindowDimensions();
	const uri = categoryImage(category);

	return (
		<View style={styles.container}>
			<View style={styles.containerCategory}>
				<View>
					<Image
						source={{
							uri,
						}}
						style={{ ...styles.image, ...catImgHeight(width) }}
					/>
					<View style={{ ...styles.textContainer, ...catImgHeight(width) }}>
						<View style={styles.textSubContainer}>
							<Text style={styles.textCategory}>{category}</Text>
						</View>
						<View style={styles.textSubContainer}>
							<Text style={styles.textCategory}>FREE SHIPPING STARTS TODAY! No minimum spend.</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ImageCategory;
