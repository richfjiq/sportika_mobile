import { useEffect, useRef, useState } from 'react';
import { Platform, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../../hooks';
import { IProduct } from '../../interfaces';

import { colors } from '../../theme/appTheme';
import {
	inputPadding,
	responsiveFontSize,
	responsiveIcon,
	responsiveInputHeight,
} from '../../utils';
import { styles } from './SearchInput.style';

interface Props {
	products: IProduct[];
	onDebounce: (val: string) => void;
}

const SearchInput = ({ onDebounce }: Props) => {
	const { width } = useWindowDimensions();
	const [searchString, setSearchString] = useState('');
	const platform = Platform.OS;

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
			<View
				style={
					platform === 'android'
						? { ...styles.inputContainerAndroid, ...responsiveInputHeight(40, width) }
						: { ...styles.inputContainer, ...responsiveInputHeight(40, width) }
				}
			>
				<View style={{ ...styles.searchIcon, ...responsiveInputHeight(30, width) }}>
					<Icon
						name={'search-outline'}
						size={responsiveIcon(24, width)}
						color={colors.crocodileTooth}
					/>
				</View>
				<TextInput
					ref={inputRef}
					style={
						platform === 'android'
							? {
									...styles.searchInputAndroid,
									...responsiveInputHeight(40, width),
									...responsiveFontSize(16, width),
									...inputPadding(width),
							  }
							: {
									...styles.searchInput,
									...responsiveInputHeight(30, width),
									...responsiveFontSize(16, width),
									...inputPadding(width),
							  }
					}
					value={searchString}
					onChangeText={setSearchString}
					placeholder="Search"
				/>
				{searchString && (
					<TouchableOpacity
						style={{ ...styles.closeIcon, ...responsiveInputHeight(30, width) }}
						onPress={deleteSearchTerm}
					>
						<Icon
							name={'close-circle-outline'}
							size={responsiveIcon(24, width)}
							color={colors.greyText}
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default SearchInput;
