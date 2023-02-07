import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';

import { bgImageHeight } from '../../utils';
import { colors } from '../../theme/appTheme';
import { RootTabsParams } from '../../navigation/BottomTabsNav';
import { styles } from './Home.style';

interface Props extends BottomTabScreenProps<RootTabsParams, 'Home'> {}

const Home = ({ navigation }: Props) => {
	const { width } = useWindowDimensions();

	const goToBuy = () => {
		navigation.navigate('MenuStack' as never, { screen: 'Menu' } as never);
	};

	return (
		<View style={styles.flex}>
			<Header title="Sportika" />
			<View style={styles.separator} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854319/sportika/mxr83dkv3dpz6a71ysun.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={styles.phraseText}>Reinvent your Impulse</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={styles.buttonText}>Buy now</Text>
							<Icon name={'arrow-forward-outline'} size={20} color={colors.black} />
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854317/sportika/cevbs41ko60aamjqccff.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={styles.phraseText}>Ready for a hit session?</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={styles.buttonText}>Buy now</Text>
							<Icon name={'arrow-forward-outline'} size={20} color={colors.black} />
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854318/sportika/il7fqjp3raji0l0hwl8r.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={styles.phraseText}>Maximum Comfort, infinite poss...</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={styles.buttonText}>Buy now</Text>
							<Icon name={'arrow-forward-outline'} size={20} color={colors.black} />
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854317/sportika/wkztkphlgr6b3dmjkxlq.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={styles.phraseText}>Imagine your world</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={styles.buttonText}>Buy now</Text>
							<Icon name={'arrow-forward-outline'} size={20} color={colors.black} />
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
};

export default Home;
