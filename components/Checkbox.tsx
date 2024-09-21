import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import CheckIcon from '@/components/icons/CheckIcon';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';

interface CheckboxProps {
	checked: boolean;
	setChecked: (checked: boolean) => void;
	type?: 'default' | 'round';
}

export default function Checkbox({ checked, setChecked, type = 'default' }: CheckboxProps) {
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<Pressable onPress={ () => setChecked(!checked) }>
			<MotiView
				from={ {
					opacity: 0.5,
				} }
				animate={ {
					opacity: checked ? 1 : 0.5,
				} }
				transition={ {
					type: 'spring',
					stiffness: 200,
					damping: 15,
				} }
				style={ {
					...styles.container,
					borderWidth: checked ? 0 : 2,
					borderColor: Colors[colorScheme]['grayScale.primary50'],
					backgroundColor: checked ? Colors[colorScheme]['brand.blue50'] : 'transparent',
					borderRadius: type === 'round' ? 12 : 4.8,
				} }
			>
				{ checked && <CheckIcon /> }
			</MotiView>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
