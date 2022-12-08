import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../store';
import { AccountForm } from '../AccountForm';
import { styles } from './MyAccount.style';

const MyAccount = () => {
	const { user } = useAuth();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<View style={styles.editRow}>
					<Text style={styles.headerText}>Name</Text>
					<TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
						<Text style={styles.editText}>Edit</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.text}>{user?.name}</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={styles.headerText}>Email</Text>
				<Text style={styles.text}>{user?.email}</Text>
			</View>
			<View style={styles.rowLastContainer}>
				<Text style={styles.headerText}>Password</Text>
				<Text style={styles.text}>**********</Text>
			</View>
			<AccountForm visible={isVisible} setVisible={setIsVisible} />
		</View>
	);
};

export default MyAccount;
