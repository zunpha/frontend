import { Keyboard, Pressable, StyleSheet } from 'react-native';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import View from '@/components/views/View';
import { useColorScheme } from '@/components/useColorScheme';
import Textfield from '@/components/Textfield';
import Button from '@/components/Button';
import useOnboardStore from '@/stores/onboardStore';
import { router } from 'expo-router';

export default function NicknameScreen() {
	const {
		nickname, setNickname,
	} = useOnboardStore((state) => state);

	const colorScheme = useColorScheme();

	return (
		<Pressable style={ {
			flex: 1,
		} } onPress={ () => {
			Keyboard.dismiss();
		} } accessible={ true }>
			<View style={ styles.container }>
				<View style={ styles.title }>
					<Text size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						전파에서 사용하실
					</Text>
					<Text size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						닉네임을 입력해주세요.
					</Text>
				</View>
				<View style={ styles.form }>
					<Textfield
						placeholder={ '닉네임' }
						value={ nickname }
						onChangeText={ setNickname }
						keyboardType={ 'default' }
					/>
				</View>
			</View>
			<View style={ styles.nextButton }>
				<Button height={ 56 } disabled={ nickname.length === 0 } onPress={ () => {
					router.push('/(onboard)/agreement');
				} }>다음</Button>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
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

	nextButton: {
		width: '100%',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',

		bottom: 27,

		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
