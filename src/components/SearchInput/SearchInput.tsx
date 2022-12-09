import { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../../hooks';
import { IProduct } from '../../interfaces';

import { colors } from '../../theme/appTheme';
import { styles } from './SearchInput.style';

interface Props {
	products: IProduct[];
	onDebounce: (val: string) => void;
}

const SearchInput = ({ onDebounce }: Props) => {
	const [searchString, setSearchString] = useState('');

	const inputRef = useRef<TextInput>(null);

	const term = useDebouncedValue(searchString, 1000);

	useEffect(() => {
		onDebounce(term);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term]);

	const deleteSearchTerm = () => {
		onDebounce('');
		setSearchString('');
		inputRef.current?.blur();
	};

	return (
		<View style={styles.searchContainer}>
			<View style={styles.inputContainer}>
				<View style={styles.searchIcon}>
					<Icon name={'search-outline'} size={24} color={colors.greyText} />
				</View>
				<TextInput
					ref={inputRef}
					style={styles.searchInput}
					value={searchString}
					onChangeText={setSearchString}
				/>
				{searchString && (
					<TouchableOpacity style={styles.closeIcon} onPress={deleteSearchTerm}>
						<Icon name={'close-circle-outline'} size={24} color={colors.greyText} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default SearchInput;
