import View from "@/components/views/View";
import {Platform, StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import Text from "@/components/Text";
import {TextSize} from "@/enums/TextSize";
import {cloneElement, ReactElement, ReactNode} from "react";
import {Colors} from "@/constants/Colors";


interface ItemProps {
	icon: ReactElement;
	title: string;
	selected: boolean;
	onClick?: () => void;
}

function Item({icon, title, selected, onClick}: ItemProps) {
	const colorScheme = useColorScheme() ?? 'light';

	// cloneElement를 사용하여 icon의 fill을 변경
	const modifiedIcon = cloneElement(icon, {
		fill: selected ? Colors[colorScheme]['brand.blue50'] : Colors[colorScheme]['grayScale.primary30'],
	});

	return (
		<TouchableOpacity style={styles.itemContainer} onPress={onClick} activeOpacity={0.7}>
			{modifiedIcon}
			<Text size={TextSize.BodySmall} color={selected ? 'brand.blue50' : 'grayScale.primary30'}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default function NavBar({ children }: { children: ReactNode }) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<View style={{
			...styles.container,
			borderColor: Colors[colorScheme]['grayScale.primary20'],
		}}>
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

		borderTopStartRadius: 12,
		borderTopEndRadius: 12,

		borderWidth: 1,

		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: Platform.OS === 'ios' ? 36 : 24, // iOS는 36px, Android는 24px
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