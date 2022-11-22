import { Text, TouchableOpacity, FlatList } from 'react-native';

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
			<FlatList
				data={sizes}
				renderItem={({ item }) => {
					const styleSizeSelected = () => {
						if (selectedSize === item) return styles.sizeSelected;
						return styles.size;
					};

					const containerStyle =
						selectedSize === item ? styles.sizeContainerSelected : styles.sizeContainer;

					return (
						<TouchableOpacity
							style={containerStyle}
							key={item}
							onPress={() => onSelectedSize(item)}
						>
							<Text style={styleSizeSelected()}>{item}</Text>
						</TouchableOpacity>
					);
				}}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</>
	);
};

export default SizeSelector;
