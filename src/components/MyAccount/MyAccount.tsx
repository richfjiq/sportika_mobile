import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../store/auth/hooks';
import { styles } from './MyAccount.style';

const MyAccount = () => {
	const { user } = useAuth();

	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<Text style={styles.headerText}>Name</Text>
				<Text style={styles.text}>{user?.name}</Text>
				<TouchableOpacity>
					<Text style={styles.editText}>Edit</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.rowContainer}>
				<Text style={styles.headerText}>Email</Text>
				<Text style={styles.text}>{user?.email}</Text>
				<TouchableOpacity>
					<Text style={styles.editText}>Edit</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.rowContainer}>
				<Text style={styles.headerText}>Password</Text>
				<Text style={styles.text}>**********</Text>
				<TouchableOpacity>
					<Text style={styles.editText}>Edit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MyAccount;
