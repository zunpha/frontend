import {TextStyle, TouchableOpacity, useColorScheme, ViewStyle} from "react-native";
import {ButtonType} from "@/enums/Button";
import {Colors} from "@/constants/Colors";
import {ReactNode} from "react";
import StyledText from "@/components/Text";
import {TextSize} from "@/enums/TextSize";

interface ButtonProps {
	type: ButtonType;
	height?: number;
	radius?: number;
	children?: ReactNode;
}

interface StyleType extends ViewStyle, TextStyle {
	color: keyof typeof Colors.light & keyof typeof Colors.dark;
}

const StyledButton = ({
	type = ButtonType.Primary,
	height = 56,
	radius = 8,
	children
}: ButtonProps) => {
	const colorScheme = useColorScheme() ?? 'light';
	const buttonStyle: StyleType = {
		height,
		width: '100%',

		color: 'white',
		backgroundColor: '#000',

		borderRadius: radius,

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}

	if (type === ButtonType.Primary) {
		buttonStyle['backgroundColor'] = Colors[colorScheme]["brand.blue50"];
		buttonStyle['color'] = 'white';
	} else {
		buttonStyle['backgroundColor'] = Colors[colorScheme]["grayScale.primary20"];
		buttonStyle['color'] = 'grayScale.primary60';
	}

	return (
		<TouchableOpacity style={buttonStyle} activeOpacity={0.7}>
			<StyledText color={buttonStyle.color} size={TextSize.BodyLarge}>{children}</StyledText>
		</TouchableOpacity>
	)
}

export default StyledButton;