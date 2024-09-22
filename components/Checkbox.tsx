import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import CheckIcon from '@/components/icons/CheckIcon';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Easing } from 'react-native-reanimated';

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
				style={ {
					...styles.container,
					borderColor: Colors[colorScheme]['grayScale.primary50'],
					backgroundColor: checked ? 'transparent' : Colors[colorScheme]['brand.blue50'],
					borderRadius: type === 'round' ? 12 : 4.8,
					borderWidth: checked ? 0 : 2,
				} }
				animate={ {
					backgroundColor: checked ? Colors[colorScheme]['brand.blue50'] : 'transparent',
					borderRadius: type === 'round' ? 16 : 6,
					borderWidth: checked ? 0 : 2,
				} }
				transition={ {
					type: 'timing',
					duration: 200,  // 애니메이션 지속 시간을 조정
					easing: Easing.inOut(Easing.ease),  // 자연스러운 전환을 위한 easing 함수
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
