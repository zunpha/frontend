import { KeyboardType, StyleSheet, TextInput, TextStyle, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

interface TextfieldProps {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	error?: boolean;
	keyboardType?: KeyboardType;
	editable?: boolean;
}

const Textfield = ({ placeholder, value, onChangeText, error = false, keyboardType, editable }: TextfieldProps) => {
	const colorScheme = useColorScheme() ?? 'light';

	const textfieldStyle: TextStyle = {
		backgroundColor: Colors[colorScheme]['grayScale.primary10'],
		color: error ? Colors[colorScheme]['system.negative50'] : Colors[colorScheme]['grayScale.primary100'],
		...styles.textfield,
	};

	return (
		<TextInput
			style={ textfieldStyle }
			placeholder={ placeholder }
			placeholderTextColor={ Colors[colorScheme]['grayScale.primary50'] }
			value={ value }
			onChangeText={ onChangeText }
			keyboardType={ keyboardType }
			editable={ editable }
		/>
	);
};

export default Textfield;

const styles = StyleSheet.create({
	textfield: {
		height: 56,
		width: '100%',

		padding: 16,

		borderRadius: 8,

		fontSize: 16,
		letterSpacing: .5,
	},
});
