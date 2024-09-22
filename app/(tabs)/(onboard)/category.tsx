import { Keyboard, Pressable, StyleSheet } from 'react-native';
import { TextSize } from '@/enums/TextSize';
import View from '@/components/View';
import {Button, StyledText} from '@/components/ui/atoms';
import { router } from 'expo-router';
import Category from '@/components/Category';
import useCategoryStore from '@/stores/categoryStore';

export default function NicknameScreen() {
	const {
		categories, setCategories,
	} = useCategoryStore((state) => state);

	const isOk = () => {
		return categories.filter((category) => category.checked).length >= 3;
	};


	return (
		<Pressable style={ {
			flex: 1,
		} } onPress={ () => {
			Keyboard.dismiss();
		} } accessible={ true }>
			<View style={ styles.container }>
				<View style={ styles.title }>
					<StyledText size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						자주 찾는 전자기기 항목들을
					</StyledText>
					<StyledText size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						<StyledText size={ TextSize.HeadingLarge } color={ 'brand.blue60' }>3개 이상</StyledText> 선택해주세요.
					</StyledText>
				</View>
				<View style={ styles.form }>
					{
						categories.map((category, index) => (
							<Category
								key={ index }
								text={ category.name }
								checked={ category.checked }
								setChecked={ (value) => {
									const newCategories = [ ...categories ];
									newCategories[index].checked = value;
									setCategories(newCategories);
								} }
							/>
						))
					}
				</View>
			</View>
			<View style={ styles.nextButton }>
				<Button height={ 56 } disabled={ !isOk() } onPress={ () => {
					router.push('/(market)/home');
				} }>마무리하기</Button>
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
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		rowGap: 12,
		columnGap: 8,
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
