// components/StyledView.tsx
import { useColorScheme, View, ViewStyle } from 'react-native';
import { FC, ReactNode } from 'react';
import { Colors } from '@/constants/Colors';

interface ViewProps {
	backgroundColor?: keyof typeof Colors.light & keyof typeof Colors.dark;
	children?: ReactNode;
	style?: ViewStyle;
	isSafeArea?: boolean;
}

const StyledView: FC<ViewProps> = ({ backgroundColor = 'grayScale.primary5', children, style }) => {
	const colorScheme = useColorScheme() ?? 'light';
	const viewStyle: ViewStyle = {
		backgroundColor: Colors[colorScheme][backgroundColor],
		...style,
	};

	return <View style={ viewStyle }>{ children }</View>;
};

export default StyledView;
