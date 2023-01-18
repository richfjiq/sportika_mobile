import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Alert } from 'react-native';

import { BottomTabsNav } from './src/navigation/BottomTabsNav';
import { store } from './src/store';
import { getPublishableKey } from './src/utils';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
	const [publishableKey, setPublishableKey] = useState('');

	const fetchPublishableKey = async () => {
		try {
			const response = await getPublishableKey();
			if (response) {
				setPublishableKey(response);
			}
		} catch (error) {
			Alert.alert('Error', 'Error Server');
		}
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchPublishableKey();
	}, []);

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Provider store={store}>
			<StripeProvider publishableKey={publishableKey}>
				<NavigationContainer>
					<BottomTabsNav />
				</NavigationContainer>
			</StripeProvider>
		</Provider>
	);
};

export default App;
