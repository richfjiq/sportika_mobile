import {
	View,
	Text,
	Modal,
	TouchableOpacity,
	TouchableWithoutFeedback,
	useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './AddressModal.style';
import { responsiveFontSize } from '../../utils';

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
}

const AddressModal = ({ visible, setVisible }: Props) => {
	const { width } = useWindowDimensions();
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
						<Text style={{ ...styles.text, ...responsiveFontSize(16, width) }}>Please Log In</Text>
						<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToLogIn}>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(16, width) }}>Log In</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</TouchableOpacity>
		</Modal>
	);
};

export default AddressModal;
