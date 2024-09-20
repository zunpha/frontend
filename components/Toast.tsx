import ErrorIcon from '@/components/icons/ErrorIcon';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import { StyleSheet, StyleSheetProperties } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { AnimatePresence, MotiView } from 'moti';
import { useEffect, useState } from 'react';

interface ToastProps {
	text: string;
	duration: number;
	style?: StyleSheetProperties;
	onDismiss?: () => void; // 토스트가 사라질 때 호출될 콜백
}

export default function Toast({
	                              text,
	                              duration,
	                              style,
	                              onDismiss,
                              }: ToastProps) {

	const colorScheme = useColorScheme();
	const [ isVisible, setIsVisible ] = useState(true);

	useEffect(() => {
		// duration이 끝나면 onDismiss를 호출하여 토스트를 제거
		const timeout = setTimeout(() => {
			setIsVisible(false);
			setTimeout(() => {
				if (onDismiss) {
					onDismiss();
				}
			}, duration); // 애니메이션 시간 이후에 onDismiss 호출
		}, duration);

		return () => clearTimeout(timeout); // 컴포넌트가 언마운트될 때 타이머 정리
	}, [ duration, onDismiss ]);

	return (
		<AnimatePresence>
			{ isVisible && (
				<MotiView
					from={ { translateY: 200, opacity: 0, scale: 1 } } // 초기 위치와 크기 설정
					animate={ { translateY: 0, opacity: 1, scale: 1 } } // 애니메이션 후 위치와 크기 설정
					exit={ { opacity: 0 } } // 왼쪽으로 슬라이드하며 사라짐
					transition={ {
						type: 'spring',
						damping: 16, // 낮은 값으로 튀는 정도 증가
						stiffness: 200, // 스프링 강도 증가로 팝업 느낌 강화
						mass: 1,
					} }
					style={ {
						...styles.container,
						backgroundColor: colorScheme === 'light' ? 'rgba(24, 24, 28, 0.12)' : 'rgba(245, 245, 253, 0.12)',
						...style, // 추가적인 스타일이 있으면 병합
					} }
				>
					<ErrorIcon />
					<Text size={ TextSize.BodyLarge } color={ 'system.negative50' }>
						{ text }
					</Text>
				</MotiView>
			) }
		</AnimatePresence>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 12,

		paddingVertical: 16,
		paddingHorizontal: 20,
		borderRadius: 12,
	},
});
