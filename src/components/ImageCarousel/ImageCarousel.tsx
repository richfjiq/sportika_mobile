import { Image, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-reanimated-carousel';

import { styles } from './ImageCarousel.style';

interface Props {
	data: string[];
}

const ImageCarousel = ({ data }: Props) => {
	return (
		<View style={styles.carouselContainer}>
			<Carousel
				width={wp('100%')}
				height={wp('100%')}
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
