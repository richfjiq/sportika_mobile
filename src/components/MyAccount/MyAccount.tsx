import { useEffect, useState } from 'react';
import { Alert, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';

import { useAuth } from '../../store';
import { responsiveFontSize } from '../../utils';
import { AccountForm } from '../AccountForm';
import { PasswordForm } from '../PasswordForm';
import { styles } from './MyAccount.style';

const MyAccount = () => {
	const { width } = useWindowDimensions();
	const { user, errorMessage, removeError } = useAuth();
	const [isVisible, setIsVisible] = useState(false);
	const [passwordModal, setPasswordModal] = useState(false);

	useEffect(() => {
		if (errorMessage === 'Current password is incorrect.') {
			Alert.alert('Login failed', errorMessage, [
				{
					text: 'Ok',
					onPress: removeError,
				},
			]);
		}
	}, [errorMessage, removeError]);

	const renderPasswordRow = () => {
		if (user?.type === 'googleAuthentication') return null;

		return (
			<View style={styles.rowLastContainer}>
				<View style={styles.editRow}>
					<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>Password</Text>
					{user?.type === 'credentials' && (
						<TouchableOpacity onPress={() => setPasswordModal(!isVisible)}>
							<Text style={{ ...styles.editText, ...responsiveFontSize(14, width) }}>Edit</Text>
						</TouchableOpacity>
					)}
				</View>
				<Text style={{ ...styles.text, ...responsiveFontSize(16, width) }}>**********</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<View style={styles.editRow}>
					<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>Name</Text>
					{user?.type === 'credentials' && (
						<TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
							<Text style={{ ...styles.editText, ...responsiveFontSize(14, width) }}>Edit</Text>
						</TouchableOpacity>
					)}
				</View>
				<Text style={{ ...styles.text, ...responsiveFontSize(16, width) }}>{user?.name}</Text>
			</View>
			<View style={user?.type === 'credentials' ? styles.rowContainer : styles.rowLastContainer}>
				<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>Email</Text>
				<Text style={{ ...styles.text, ...responsiveFontSize(16, width) }}>{user?.email}</Text>
			</View>
			{renderPasswordRow()}

			<AccountForm visible={isVisible} setVisible={setIsVisible} />
			<PasswordForm visible={passwordModal} setVisible={setPasswordModal} />
		</View>
	);
};

export default MyAccount;
