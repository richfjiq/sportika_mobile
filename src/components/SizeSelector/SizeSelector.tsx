import { Text, useWindowDimensions, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import { ISize } from '../../interfaces';
import { responsiveFontSize, responsiveInputHeight } from '../../utils';
import { styles } from './SizeSelector.style';

interface Props {
	selectedSize?: ISize;
	sizes: ISize[];
	onSelectedSize: (size: ISize) => void;
}

const SizeSelector = ({ selectedSize, sizes, onSelectedSize }: Props) => {
	const { width } = useWindowDimensions();

	return (
		<>
			<Text style={{ ...styles.subHeader, ...responsiveFontSize(16, width) }}>Sizes</Text>
			<View style={styles.selectContainer}>
				<SelectList
					defaultOption={{ key: selectedSize, value: selectedSize }}
					setSelected={(val: ISize) => onSelectedSize(val)}
					data={sizes}
					searchPlaceholder="Select"
					boxStyles={{
						...styles.selectInput,
						...responsiveInputHeight(40, width),
					}}
					inputStyles={responsiveFontSize(16, width)}
					dropdownTextStyles={responsiveFontSize(16, width)}
					search={false}
				/>
			</View>
		</>
	);
};

export default SizeSelector;
