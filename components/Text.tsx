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
	style?: TextStyle;
	numberOfLines?: number; // 추가: 텍스트 표시 줄 수
	ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'; // 추가: 텍스트가 넘칠 때 처리 방식
}

const StyledText: FC<TextProps> = ({ size, color, children, style, numberOfLines, ellipsizeMode }) => {
	// 기기 테마 색상을 가져옵니다
	const colorScheme = useColorScheme();
	const textStyle: TextStyle = {
		...getSizeStyle(size),
		...style,
		color: colorScheme === 'dark' ? Colors.dark[color] : Colors.light[color],
	};

	return (
		<Text
			style={textStyle}
			numberOfLines={numberOfLines} // 추가: 줄 수 적용
			ellipsizeMode={ellipsizeMode} // 추가: 넘침 처리 방식 적용
		>
			{children}
		</Text>
	);
};

export default StyledText;