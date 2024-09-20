import { StyleSheet } from 'react-native';
import Text from '@/components/Text';
import { TextSize } from '@/enums/TextSize';
import View from '@/components/views/View';
import Button from '@/components/Button';

export default function OnboardScreen() {
	return (
		<View style={ styles.container }>
			<View style={ styles.title }>
				<Text size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>어서오세요!</Text>
				<Text size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>전파에 오신것을 환영해요!</Text>
			</View>
			<View style={ styles.form }>
				<Button height={ 56 } disabled>인증번호 받기</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 24,
		paddingHorizontal: 16,
	},

	title: {
		flexDirection: 'column',
		gap: 8,
	},

	form: {},
});
