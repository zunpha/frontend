// components/StyledView.tsx
import { useColorScheme, View, ViewStyle } from 'react-native';
import { FC, ReactNode } from 'react';
import { Colors } from '@/constants/Colors';

interface ViewProps {
	backgroundColor?: keyof typeof Colors.light & keyof typeof Colors.dark;
	children: ReactNode;
	style?: ViewStyle;
	isSafeArea?: boolean;
}

const StyledView: FC<ViewProps> = ({ backgroundColor, children, style }) => {
	const colorScheme = useColorScheme();
	const viewStyle: ViewStyle = {
		backgroundColor: (backgroundColor && colorScheme) ? Colors[colorScheme]['grayScale.primary5'] : undefined,
		...style,
	};

	return <View style={ viewStyle }>{ children }</View>;
};

export default StyledView;
