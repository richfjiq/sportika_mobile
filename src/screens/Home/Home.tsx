import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	useWindowDimensions,
	Platform,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';

import { bgImageHeight, responsiveFontSize, responsiveIcon } from '../../utils';
import { colors } from '../../theme/appTheme';
import { RootTabsParams } from '../../navigation/BottomTabsNav';
import { styles } from './Home.style';

interface Props extends BottomTabScreenProps<RootTabsParams, 'Home'> {}

const Home = ({ navigation }: Props) => {
	const { width, height } = useWindowDimensions();

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
					style={{ ...styles.imageBg, ...bgImageHeight(width, height, Platform.OS) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={{ ...styles.phraseText, ...responsiveFontSize(18, width) }}>
								Reinvent your impulse
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 15 }}>
								Nothing exhausts and
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 5 }}>
								destroys the human body like
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 5 }}>
								like physical inactivity
							</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(18, width) }}>
								Buy now
							</Text>
							<Icon
								name={'arrow-forward-outline'}
								size={responsiveIcon(20, width)}
								color={colors.cultured}
							/>
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854317/sportika/cevbs41ko60aamjqccff.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width, height, Platform.OS) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={{ ...styles.phraseText, ...responsiveFontSize(18, width) }}>
								Ready for a hit session?
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 15 }}>
								All what you need in order
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 5 }}>
								to achieve your training goals
							</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(18, width) }}>
								Buy now
							</Text>
							<Icon
								name={'arrow-forward-outline'}
								size={responsiveIcon(20, width)}
								color={colors.cultured}
							/>
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854318/sportika/il7fqjp3raji0l0hwl8r.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width, height, Platform.OS) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={{ ...styles.phraseText, ...responsiveFontSize(18, width) }}>
								Maximum Comfort, infinite poss...
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 15 }}>
								Success is not an accident,
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 5 }}>
								success is a choice
							</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(18, width) }}>
								Buy now
							</Text>
							<Icon
								name={'arrow-forward-outline'}
								size={responsiveIcon(20, width)}
								color={colors.cultured}
							/>
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<ImageBackground
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667854317/sportika/wkztkphlgr6b3dmjkxlq.jpg',
					}}
					style={{ ...styles.imageBg, ...bgImageHeight(width, height, Platform.OS) }}
				>
					<View style={styles.subContainer}>
						<View style={styles.phraseContainer}>
							<Text style={{ ...styles.phraseText, ...responsiveFontSize(18, width) }}>
								Imagine your world
							</Text>
							<Text style={{ ...styles.text, ...responsiveFontSize(16, width), marginTop: 15 }}>
								One step at a time, never give up
							</Text>
						</View>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToBuy}>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(18, width) }}>
								Buy now
							</Text>
							<Icon
								name={'arrow-forward-outline'}
								size={responsiveIcon(20, width)}
								color={colors.cultured}
							/>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
};

export default Home;
