import View from "@/components/views/View";
import {StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import Text from "@/components/Text";
import {TextSize} from "@/enums/TextSize";
import {cloneElement, ReactElement, ReactNode} from "react";
import {Colors} from "@/constants/Colors";


interface ItemProps {
	icon: ReactElement;
	title: string;
	selected: boolean;
}

function Item({icon, title, selected}: ItemProps) {
	const colorScheme = useColorScheme() ?? 'light';

	// cloneElement를 사용하여 icon의 fill을 변경
	const modifiedIcon = cloneElement(icon, {
		fill: selected ? Colors[colorScheme]['brand.blue50'] : Colors[colorScheme]['grayScale.primary30'],
	});

	return (
		<TouchableOpacity style={styles.itemContainer}>
			{modifiedIcon}
			<Text size={TextSize.BodySmall} color={selected ? 'brand.blue50' : 'grayScale.primary30'}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default function NavBar({ children }: { children: ReactNode }) {
	return (
		<View style={styles.container}>
			{children}
		</View>
	)
}

NavBar.Item = Item;

const styles = StyleSheet.create({
	container: {
		width: '100%',

		position: 'absolute',
		bottom: 0,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',

		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 36, // Ios Indicator 높이만큼 14px 추가
	},
	itemContainer: {
		width: 'auto',
		height: 42,

		paddingHorizontal: 10,

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6
	}
});