import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginForm } from '../../components';

import { styles } from './Login.style';

const Login = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, paddingTop: Platform.OS === 'ios' ? top : 10 }}>
			<LoginForm />
		</View>
	);
};

export default Login;
