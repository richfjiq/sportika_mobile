import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginForm } from '../../components';

import { styles } from './Login.style';

const Login = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, paddingTop: top }}>
			<LoginForm />
		</View>
	);
};

export default Login;
