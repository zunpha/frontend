import {StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import Text from "@/components/ui/atoms/Text";
import {TextSize} from "@/enums/TextSize";
import {Colors} from "@/constants/Colors";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import {ReactElement, useState} from "react";

interface SelectProps {
	name: string;
	state: string;
	onClick?: () => void;
}

const Select = ({name, state, onClick}: SelectProps) => {
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<>
			<TouchableOpacity onPress={() => {
				if (onClick) {
					onClick();
				}
			}} style={{
				...styles.container,
				borderColor: Colors[colorScheme]['grayScale.primary30'],
			}}>
				<Text size={TextSize.BodyLarge} style={{ marginTop: -2 }} color={state !== '' ? 'grayScale.primary90' : 'grayScale.primary50'}>{state !== '' ? state : name}</Text>
				<ArrowDownIcon size={20} fill={Colors[colorScheme]['grayScale.primary80']} />
			</TouchableOpacity>
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