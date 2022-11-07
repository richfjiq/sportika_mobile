import { View, Text } from 'react-native';
// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { RootTabsParams } from '../../navigation/BottomTabsNav';

// import { styles } from './Home.style';

// interface Props extends BottomTabScreenProps<RootTabsParams, 'Home'> {}

const Home = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ marginTop: top }}>
			<Text>Home</Text>
		</View>
	);
};

export default Home;
