import { StyleSheet } from 'react-native';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import View from '@/components/views/View';
import Button from '@/components/Button';
import Textfield from '@/components/Textfield';
import { useEffect, useState } from 'react';
import { RegexList } from '@/constants/RegexList';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import { getSizeStyle } from '@/utils/getTextSize';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function OnboardScreen() {
	const [ verifyButtonText, setVerifyButtonText ] = useState('인증번호 받기');
	const [ phoneNumber, setPhoneNumber ] = useState('');
	const [ isVerifyButtonDisabled, setIsVerifyButtonDisabled ] = useState(true);
	const [ isSigningUp, setIsSigningUp ] = useState(false);
	const [ isStartButtonDisabled, setIsStartButtonDisabled ] = useState(true);
	const [ verifyCode, setVerifyCode ] = useState('');
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
		if (verifyCode.length === 6) {
			setIsStartButtonDisabled(false);
		} else {
			setIsStartButtonDisabled(true);
		}
	}, [ verifyCode ]);

	const handleSignUpPress = () => {
		setIsSigningUp(true);
		setVerifyButtonText('인증번호 다시 받기 (00분 00초 후)');
		setHasStartedSigningUp(true); // 처음으로 시작 상태를 true로 설정
	};

	return (
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
				/>
				<Button height={ 56 } disabled={ isVerifyButtonDisabled } onPress={ handleSignUpPress }>
					{ verifyButtonText }
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
								value={ verifyCode }
								onChangeText={ setVerifyCode }
								keyboardType={ 'number-pad' }
							/>
							<Button height={ 56 } disabled={ isStartButtonDisabled }>
								동의하고 시작하기
							</Button>
						</MotiView>
					) }
				</AnimatePresence>
				{
					isSigningUp || (
						<View style={styles.contactContainer}>
							<Text size={ TextSize.BodySmall } color={ 'grayScale.primary50' }>전화번호를 변경하셨나요?</Text>
							<Text size={ TextSize.BodySmall } color={ 'brand.blue50' }>문의하기</Text>
						</View>
					)
				}
				{ isSigningUp && (
					<MotiText
						from={ { translateY: -136, opacity: 1 } } // 초기 애니메이션 없음
						animate={ { translateY: isSigningUp && hasStartedSigningUp ? 0 : 0, opacity: 1 } } // 추가 애니메이션은 생겼을 때만
						style={ {
							fontSize: getSizeStyle(TextSize.BodySmall).fontSize,
							color: colorScheme === 'dark' ? Colors.dark['grayScale.primary70'] : Colors.light['grayScale.primary70'],
							marginVertical: 8,
						} }
						transition={ { type: 'timing', duration: 300 } }
					>
						<View style={styles.contactContainer}>
							<Text size={ TextSize.BodySmall } color={ 'grayScale.primary50' }>전화번호를 변경하셨나요?</Text>
							<Text size={ TextSize.BodySmall } color={ 'brand.blue50' }>문의하기</Text>
						</View>
					</MotiText>
				) }
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
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
	}
});
