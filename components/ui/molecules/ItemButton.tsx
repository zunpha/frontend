import {TouchableOpacity, StyleSheet} from "react-native";
import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import {ReactNode} from "react";

interface ItemButtonProps {
	children?: ReactNode;
	checked?: boolean;
	onClick?: () => void;
}

export default function ItemButton({children, checked, onClick}: ItemButtonProps) {
	return (
		<TouchableOpacity onPress={onClick} style={styles.container}>
			<StyledText size={TextSize.HeadingSmall} color={checked ? 'brand.blue50' : 'grayScale.primary50'}>{children}</StyledText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',

		display: 'flex',
		alignItems: 'center',

		paddingVertical: 8,
	}
})