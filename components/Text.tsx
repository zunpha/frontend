// components/Text.tsx
import { Text, TextStyle, useColorScheme } from 'react-native';
import { TextSize } from '@/enums/TextSize';
import { getSizeStyle } from '@/utils/getTextSize';
import { FC, ReactNode } from 'react';
import { Colors } from '@/constants/Colors';

interface TextProps {
	size: TextSize;
	color: keyof typeof Colors.light & keyof typeof Colors.dark;
	children: ReactNode;
}

const StyledText: FC<TextProps> = ({ size, color, children }) => {
	// 기기 테마 색상을 가져옵니다
	const colorScheme = useColorScheme();
	const textStyle: TextStyle = {
		...getSizeStyle(size),
		color: colorScheme === 'dark' ? Colors.dark[color] : Colors.light[color],
	};

	return <Text style={ textStyle }>{ children }</Text>;
};

export default StyledText;
