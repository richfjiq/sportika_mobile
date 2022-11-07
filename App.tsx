import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNav } from './src/navigation/BottomTabsNav';

// import { StackNavigator } from './src/navigation/StackNavigator';

const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			<BottomTabsNav />
		</NavigationContainer>
	);
};

export default App;
