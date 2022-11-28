import { FC } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import { colors } from '../../theme/appTheme';
import { styles } from './Loading.style';

interface Props {
	modalVisible: boolean;
}

const Loading: FC<Props> = ({ modalVisible }) => {
	return (
		<Modal animationType="fade" transparent={true} visible={modalVisible}>
			<View style={styles.container}>
				<ActivityIndicator size={'large'} color={colors.white} />
			</View>
		</Modal>
	);
};

export default Loading;
