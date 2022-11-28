import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './AddressModal.style';

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
}

const AddressModal = ({ visible, setVisible }: Props) => {
	const navigator = useNavigation();

	const goToLogIn = () => {
		navigator.navigate('UserStack' as never, { screen: 'Login' } as never);
		setVisible(!visible);
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={visible}
			onRequestClose={() => setVisible(false)}
		>
			<TouchableOpacity style={styles.container} onPress={() => setVisible(false)}>
				<TouchableWithoutFeedback>
					<View style={styles.messageContainer}>
						<Text style={styles.text}>Please Log In, and Add / Update Address</Text>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToLogIn}>
							<Text style={styles.buttonText}>Log In</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</TouchableOpacity>
		</Modal>
	);
};

export default AddressModal;
