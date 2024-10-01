import React, {useEffect, useState} from 'react';
import {Dimensions, LayoutChangeEvent, Modal as RNModal, Pressable, StyleSheet, View} from 'react-native';
import {
	HandlerStateChangeEvent,
	PanGestureHandler,
	PanGestureHandlerEventPayload,
	PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {useModal} from '@/stores/Modal'; // Zustand 스토어 import

interface ModalProps {
	uniqueId: string;
	children?: React.ReactNode;
}

/**
 * 모달 컴포넌트
 * @param uniqueId 모달의 고유 ID
 * @param children 모달 내부 컨텐츠
 */

export default function Modal({uniqueId, children}: ModalProps) {
	const {closeModal, isModalOpen} = useModal(); // Zustand 훅으로 상태를 가져옴
	const [modalHeight, setModalHeight] = useState(0); // 모달의 높이를 저장하는 상태
	const translateY = useSharedValue(300); // 모달이 처음에는 화면 아래에 위치
	const backdropOpacity = useSharedValue(0);

	// 화면 높이 가져오기
	const screenHeight = Dimensions.get('window').height;

	// 모달이 위로 드래그될 때 최대 높이 제한 (화면 높이의 20%까지만 위로 올라가게 제한)
	const maxTranslateY = -screenHeight * 0.4;

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{translateY: translateY.value}],
		};
	});

	const backdropStyle = useAnimatedStyle(() => {
		return {
			opacity: backdropOpacity.value,
		};
	});

	const handleGesture = (event: PanGestureHandlerGestureEvent) => {
		const newTranslateY = event.nativeEvent.translationY;

		// 위로 드래그했을 때 최대 높이를 제한
		if (newTranslateY < maxTranslateY) {
			translateY.value = maxTranslateY;
		} else {
			translateY.value = newTranslateY;
		}
	};

	const handleGestureEnd = (event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
		// 모달 높이의 50%를 기준으로 닫히도록 설정
		const threshold = modalHeight / 2;
		if (event.nativeEvent.translationY > threshold) {
			closeWithAnimation(); // 충분히 드래그하면 모달 닫음
		} else {
			translateY.value = withTiming(0, {duration: 300, easing: Easing.linear}); // 제자리로 돌아오게 linear 애니메이션
		}
	};

	const closeWithAnimation = () => {
		backdropOpacity.value = withTiming(0, {duration: 200, easing: Easing.linear}); // backdrop fade-out, linear easing
		translateY.value = withTiming(300, {duration: 300, easing: Easing.linear}); // 모달이 아래로 내려가는 애니메이션, linear easing
		setTimeout(() => {
			closeModal(uniqueId); // Zustand 스토어에서 모달 닫기
		}, 300); // 애니메이션이 끝난 후 모달 닫음
	};

	const openWithAnimation = () => {
		backdropOpacity.value = withTiming(1, {duration: 200, easing: Easing.linear}); // backdrop fade-in, linear easing
		translateY.value = withTiming(0, {duration: 200, easing: Easing.linear}); // 모달이 위로 올라오는 애니메이션, linear easing
	};

	// 모달이 열릴 때 애니메이션 실행
	useEffect(() => {
		if (isModalOpen(uniqueId)) {
			openWithAnimation();
		}
	}, [isModalOpen(uniqueId)]); // 모달이 열릴 때만 실행

	// 모달의 레이아웃이 변경될 때 모달 높이를 측정
	const onModalLayout = (event: LayoutChangeEvent) => {
		const {height} = event.nativeEvent.layout;
		setModalHeight(height); // 모달의 높이 설정
	};

	return (
		<RNModal visible={isModalOpen(uniqueId)} transparent={true} animationType="none">
			<Pressable style={StyleSheet.absoluteFill} onPress={closeWithAnimation}>
				<Animated.View style={[styles.backdrop, backdropStyle]}/>
			</Pressable>

			<View style={styles.modalBackground} pointerEvents="box-none">
				<Animated.View style={[styles.modal, animatedStyle]} onLayout={onModalLayout}>
					<PanGestureHandler onGestureEvent={handleGesture} onHandlerStateChange={handleGestureEnd}>
						<View style={styles.handleContainer}>
							<View style={styles.handle}/>
						</View>
					</PanGestureHandler>
					{children}
				</Animated.View>
			</View>
		</RNModal>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	backdrop: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	modalBackground: {
		flex: 1, // 모달이 화면 전체를 차지하도록 함
		justifyContent: 'flex-end', // 모달을 화면 하단에 배치
	},
	modal: {
		width: '100%',

		backgroundColor: 'white',

		borderRadius: 20,

		padding: 21,
		paddingTop: 0,

		alignItems: 'center',
		alignSelf: 'center',
	},
	handleContainer: {
		width: '100%',

		paddingVertical: 15,
		paddingBottom: 20,

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	handle: {
		width: 40,
		height: 5,

		backgroundColor: '#ccc',

		borderRadius: 2.5,
	}
});