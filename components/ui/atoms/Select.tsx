import {StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import Text from "@/components/ui/atoms/Text";
import {TextSize} from "@/enums/TextSize";
import {Colors} from "@/constants/Colors";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import {ReactElement, useState} from "react";

interface SelectProps {
	name: string;
	state: string;
	setState: (state: string) => void;
	render: ReactElement;
}

const Select = ({name, state, render}: SelectProps) => {
	const colorScheme = useColorScheme() ?? 'light';
	const [visibleRenderer, setVisibleRenderer] = useState(false);

	return (
		<>
			<TouchableOpacity onPress={() => setVisibleRenderer(!visibleRenderer)} style={{
				...styles.container,
				borderColor: Colors[colorScheme]['grayScale.primary30'],
			}}>
				<Text size={TextSize.BodyLarge} style={{ marginTop: -2 }} color={'grayScale.primary50'}>{state !== '' ? state : name}</Text>
				<ArrowDownIcon size={20} fill={Colors[colorScheme]['grayScale.primary80']} />
			</TouchableOpacity>
			{visibleRenderer && render}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 36,

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,

		paddingVertical: 9,
		paddingRight: 10,
		paddingHorizontal: 15,

		borderWidth: 1,

		borderRadius: 100,
	}
})

export default Select;