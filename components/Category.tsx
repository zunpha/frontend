import { StyleSheet } from 'react-native';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';
import { MotiPressable } from 'moti/interactions';

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
		<MotiPressable
			onPress={ () => setChecked(!checked) }
			animate={ {
				backgroundColor: checked ? Colors[colorScheme]['brand.blue60'] : Colors[colorScheme]['grayScale.primary10'],
			} }
			style={ {
				...styles.container,
				backgroundColor: checked ? Colors[colorScheme]['brand.blue60'] : Colors[colorScheme]['grayScale.primary10'],
			} }
			transition={ {
				type: 'spring',
				damping: 20,
				stiffness: 100,
				// duration: 200,
			} }
		>
			<Text size={ TextSize.BodyLarge }
			      color={ checked ? 'white' : 'grayScale.primary60' }>
				{ text }
			</Text>
		</MotiPressable>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 99,
	},
});
