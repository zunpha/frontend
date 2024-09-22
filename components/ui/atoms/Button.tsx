import { TextStyle, TouchableOpacity, useColorScheme, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ReactNode } from 'react';
import { TextSize } from '@/enums/TextSize';
import StyledText from "@/components/ui/atoms/Text";

interface ButtonProps {
	height?: number;
	radius?: number;
	children?: ReactNode;
	onPress?: () => void;
	disabled?: boolean;
}

interface StyleType extends ViewStyle, TextStyle {
	color: keyof typeof Colors.light & keyof typeof Colors.dark;
}

const StyledButton = ({
	                      height = 56,
	                      radius = 8,
	                      children,
	                      onPress,
	                      disabled,
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
	};

	if (!disabled) {
		buttonStyle['backgroundColor'] = Colors[colorScheme]['brand.blue50'];
		buttonStyle['color'] = 'white';
	} else {
		buttonStyle['backgroundColor'] = Colors[colorScheme]['grayScale.primary20'];
		buttonStyle['color'] = 'grayScale.primary60';
	}

	return (
		<TouchableOpacity style={ buttonStyle } activeOpacity={ 0.7 } onPress={ onPress } disabled={ disabled }>
			<StyledText color={ buttonStyle.color } size={ TextSize.BodyLarge }>{ children }</StyledText>
		</TouchableOpacity>
	);
};

export default StyledButton;
