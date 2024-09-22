import {Keyboard, Pressable, StyleSheet, useColorScheme} from 'react-native';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import View from '@/components/View';
import Button from '@/components/Button';
import Textfield from '@/components/Textfield';
import { useEffect, useState } from 'react';
import { RegexList } from '@/constants/RegexList';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import { getSizeStyle } from '@/utils/getTextSize';
import { Colors } from '@/constants/Colors';
import useToastStore from '@/stores/toastStore';
import { router } from 'expo-router';
import useOnboardStore from '@/stores/onboardStore';

export default function SignUpScreen() {
	const {
		phoneNumber, setPhoneNumber,
		isSigningUp, setIsSigningUp,
		verificationCode, setVerificationCode,
		isLoaded, setIsLoaded,
		isVerified, setIsVerified,
	} = useOnboardStore((state) => state);
	const [ isVerifyButtonDisabled, setIsVerifyButtonDisabled ] = useState(true);
	const [ isStartButtonDisabled, setIsStartButtonDisabled ] = useState(true);
	const [ hasStartedSigningUp, setHasStartedSigningUp ] = useState(false); // 추가된 상태

	const colorScheme = useColorScheme();

	useEffect(() => {
		const regex = RegexList.phoneNumber;

		if (regex.test(phoneNumber)) {
			setIsVerifyButtonDisabled(false);
		} else {
			setIsVerifyButtonDisabled(true);
		}
	}, [ phoneNumber ]);

	useEffect(() => {
		if (verificationCode.length === 6) {
			setIsStartButtonDisabled(false);
		} else {
			setIsStartButtonDisabled(true);
		}
	}, [ verificationCode ]);

	useEffect(() => {
		if (isSigningUp) {
			setTimeout(() => {
				setIsLoaded(true);
			}, 300);
		}
	}, [ isSigningUp ]);

	const handleSignUpPress = () => {
		setIsSigningUp(true);
		setHasStartedSigningUp(true); // 처음으로 시작 상태를 true로 설정

		if (!isSigningUp) {
			Keyboard.dismiss(); // 키보드 숨기기
		}
	};

	const { addToast } = useToastStore((state) => state);

	return (
		<Pressable style={ {
			flex: 1,
		} } onPress={ () => {
			Keyboard.dismiss();
		} } accessible={ true }>
			<View style={ styles.container }>
				<View style={ styles.title }>
					<Text size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						어서오세요!
					</Text>
					<Text size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						전파에 오신것을 환영해요!
					</Text>
				</View>
				<View style={ styles.form }>
					<Textfield
						placeholder={ '휴대폰 번호 (-없이 숫자만 입력)' }
						value={ phoneNumber }
						onChangeText={ setPhoneNumber }
						keyboardType={ 'number-pad' }
						editable={ !isSigningUp }
					/>
					<Button height={ 56 } disabled={ isVerifyButtonDisabled } onPress={ handleSignUpPress }>
						{ isSigningUp ? '인증번호 다시 받기 (00분 00초 후)' : '인증번호 받기' }
					</Button>
					<AnimatePresence>
						{ isSigningUp && (
							<MotiView
								from={ { opacity: 0, translateY: hasStartedSigningUp ? -20 : 0 } } // 처음엔 애니메이션 없이
								animate={ { opacity: 1, translateY: 0 } }
								exit={ { opacity: 0, translateY: hasStartedSigningUp ? -20 : 0 } } // 처음엔 애니메이션 없이
								style={ styles.verifyForm }
								transition={ { type: 'timing', duration: 300 } }
							>
								<Textfield
									placeholder={ '인증번호를 입력하세요' }
									value={ verificationCode }
									onChangeText={ setVerificationCode }
									keyboardType={ 'number-pad' }
									editable={ !isVerified }
								/>
								<Button height={ 56 } disabled={ isStartButtonDisabled } onPress={ () => {
									router.push('/(onboard)/nickname');
									setIsVerified(true);
								} }>
									동의하고 시작하기
								</Button>
							</MotiView>
						) }
					</AnimatePresence>
					{ !isSigningUp && (
						<View style={ styles.contactContainer }>
							<Text size={ TextSize.BodySmall } color={ 'grayScale.primary50' }>전화번호를 변경하셨나요?</Text>
							<Text size={ TextSize.BodySmall } color={ 'brand.blue50' }>문의하기</Text>
						</View>
					) }
					{ isSigningUp && (
						<MotiText
							from={ { translateY: isLoaded ? 0 : -136, opacity: 1 } } // 초기 애니메이션 없음
							animate={ { translateY: isSigningUp && hasStartedSigningUp ? 0 : 0, opacity: 1 } } // 추가 애니메이션은 생겼을 때만
							style={ {
								fontSize: getSizeStyle(TextSize.BodySmall).fontSize,
								color: colorScheme === 'dark' ? Colors.dark['grayScale.primary70'] : Colors.light['grayScale.primary70'],
								marginVertical: 8,
							} }
							transition={ { type: 'timing', duration: 300 } }
						>
							<View style={ styles.contactContainer }>
								<Text size={ TextSize.BodySmall } color={ 'grayScale.primary50' }>전화번호를 변경하셨나요?</Text>
								<Text size={ TextSize.BodySmall } color={ 'brand.blue50' }>문의하기</Text>
							</View>
						</MotiText>
					) }
				</View>
				<Button height={ 56 } onPress={ () => {
					addToast(`test ${ Date.now() }`, 3000);
				} }>test</Button>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, // Ensure the view takes up the full screen
		marginTop: 24,
		paddingHorizontal: 16,
		gap: 24,
	},

	title: {
		flexDirection: 'column',
		gap: 8,
	},

	form: {
		flexDirection: 'column',
		alignItems: 'center',
		gap: 12,
	},

	verifyForm: {
		width: '100%',
		gap: 12,
	},

	contactContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: 4,

		marginVertical: 8,
	},
});
