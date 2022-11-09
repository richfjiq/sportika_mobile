import { View, Text, Image } from 'react-native';

import { styles } from './ImageCategory.style';

interface Props {
	category: string;
}

const ImageCategory = ({ category }: Props) => {
	let uri =
		'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667941749/sportika/aifz1e34oa15abjvibjo.jpg';

	switch (category) {
		case 'men':
			uri =
				'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667941749/sportika/jebito3kfluzbmxvaee9.jpg';
			break;
		case 'girls':
			uri =
				'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667941749/sportika/tiqecaixusjejkwizmyi.jpg';
			break;
		case 'boys':
			uri =
				'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667963127/sportika/wk1hb8kuvrxyfnnghslw.jpg';
			break;
	}

	return (
		<View style={styles.container}>
			<View style={styles.containerCategory}>
				<View>
					<Image
						source={{
							uri,
						}}
						style={styles.image}
					/>
					<View style={styles.textContainer}>
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
