import { Image, useWindowDimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { imgCarouselProduct } from '../../utils';
import { styles } from './ImageCarousel.style';

interface Props {
	data: string[];
}

const ImageCarousel = ({ data }: Props) => {
	const { width } = useWindowDimensions();
	return (
		<View style={styles.carouselContainer}>
			<Carousel
				width={imgCarouselProduct(width)}
				height={imgCarouselProduct(width)}
				data={data}
				scrollAnimationDuration={500}
				renderItem={({ item }) => {
					return (
						<View style={styles.imageContainer}>
							<Image source={{ uri: `${item}` }} style={styles.image} />
						</View>
					);
				}}
				autoPlay={true}
				autoPlayInterval={2500}
			/>
		</View>
	);
};

export default ImageCarousel;
