import { Pressable, StyleSheet } from 'react-native';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';
import { MotiView } from 'moti';

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
					duration: 100,
				} }
			>
				<Text size={ TextSize.BodyLarge }
				      color={ checked ? 'brand.blue50' : 'grayScale.primary60' }>
					{ text }
				</Text>
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
