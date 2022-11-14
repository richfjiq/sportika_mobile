import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNav } from './src/navigation/BottomTabsNav';
import { Provider } from 'react-redux';
import { store } from './src/store';

// import { StackNavigator } from './src/navigation/StackNavigator';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				<BottomTabsNav />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
