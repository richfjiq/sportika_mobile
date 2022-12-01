import { Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import { ISize } from '../../interfaces';
import { styles } from './SizeSelector.style';

interface Props {
	selectedSize?: ISize;
	sizes: ISize[];
	onSelectedSize: (size: ISize) => void;
}

const SizeSelector = ({ selectedSize, sizes, onSelectedSize }: Props) => {
	return (
		<>
			<Text style={styles.subHeader}>Sizes</Text>
			<View style={styles.selectContainer}>
				<SelectList
					defaultOption={{ key: selectedSize, value: selectedSize }}
					setSelected={(val: ISize) => onSelectedSize(val)}
					data={sizes}
					boxStyles={styles.selectInput}
				/>
			</View>
		</>
	);
};

export default SizeSelector;
