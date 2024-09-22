import {Pressable, StyleSheet, useColorScheme} from 'react-native';
import { TextSize } from '@/enums/TextSize';
import { Colors } from '@/constants/Colors';
import { MotiView } from 'moti';
import {StyledText} from "@/components/ui/atoms";

interface CategoryProps {
	text: string;
	checked: boolean;
	setChecked: (value: boolean) => void;
}

export default function Category({
	                                 text, checked, setChecked,
                                 }: CategoryProps) {
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<Pressable onPress={ () => {
			setChecked(!checked);
		} }>
			<MotiView
				style={ {
					...styles.container,
					backgroundColor: checked ? Colors[colorScheme]['brand.blue10'] : Colors[colorScheme]['grayScale.primary10'],
				} }
				animate={ {
					backgroundColor: checked ? Colors[colorScheme]['brand.blue10'] : Colors[colorScheme]['grayScale.primary10'],
				} }
				transition={ {
					type: 'timing',
					duration: 200,  // 약간 더 긴 지속 시간으로 자연스러움 증가
					// easing: Easing.inOut(Easing.ease),  // 부드러운 전환을 위한 easing 함수
				} }
			>
				<StyledText size={ TextSize.BodyLarge }
				      color={ checked ? 'brand.blue50' : 'grayScale.primary60' }>
					{ text }
				</StyledText>
			</MotiView>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 99,
	},
});
