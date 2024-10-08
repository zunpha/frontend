import { Pressable, StyleSheet } from 'react-native';
import { TextSize } from '@/enums/TextSize';
import { Button, Checkbox, StyledText, View } from '@/components/ui/atoms';
import useAgreementStore from '@/stores/agreementStore';
import { router } from 'expo-router';

export default function AgreementScreen() {
	const {
		entire, setEntire,
		agreements, setAgreements,
	} = useAgreementStore((state) => state);

	const isOk = () => {
		return agreements.filter((agreement) => agreement.required).every((agreement) => agreement.checked);
	};

	return (
		<View style={ { flex: 1 } }>
			<View style={ styles.container }>
				<View style={ styles.title }>
					<StyledText size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						원활한 사용을 위해
					</StyledText>
					<StyledText size={ TextSize.HeadingLarge } color={ 'grayScale.primary90' }>
						이용 약관에 동의해주세요.
					</StyledText>
				</View>
				<View style={ styles.form }>
					<Pressable style={ styles.entireCheckbox } onPress={ () => {
						setEntire(!entire);
					} }>
						<Checkbox checked={ entire } setChecked={ setEntire } />
						<StyledText size={ TextSize.BodyLarge } color={ 'grayScale.primary80' }>
							약관 전체 동의
						</StyledText>
					</Pressable>
					<View style={ styles.line } backgroundColor={ 'grayScale.primary20' } />
					<View style={ styles.checkboxList }>
						{
							agreements.map((agreement, index) => (
								<Agreement
									key={ index }
									checked={ agreement.checked }
									onChange={ () => {
										const newAgreements = [ ...agreements ];
										newAgreements[index].checked = !agreement.checked;
										setAgreements(newAgreements);
									} }
									text={ agreement.text }
									required={ agreement.required }
								/>
							))
						}
					</View>
				</View>
			</View>
			<View style={ styles.nextButton }>
				<Button height={ 56 } disabled={ !isOk() } onPress={ () => {
					router.push('/(onboard)/category');
				} }>다음</Button>
			</View>
		</View>
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
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 20,
	},

	line: {
		width: '100%',
		height: 1,
	},

	entireCheckbox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: 12,

	},

	checkboxList: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: 20,
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

interface AgreementProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	text: string;
	required: boolean;
}

function Agreement({
	                   checked,
	                   onChange,
	                   text,
	                   required,

                   }: AgreementProps) {
	return (
		<Pressable onPress={ () => {
			onChange(!checked);
		} }>
			<View style={ agreementStyles.container }>
				<Checkbox checked={ checked } setChecked={ onChange } />
				<View style={ agreementStyles.text }>
					<StyledText size={ TextSize.BodyLarge } color={ required ? 'system.negative50' : 'grayScale.primary50' }>
						{ required ? '[필수]' : '[선택]' }
					</StyledText>
					<StyledText size={ TextSize.BodyLarge } color={ 'grayScale.primary50' }>
						{ text }
					</StyledText>
				</View>
			</View>
		</Pressable>
	);
}

const agreementStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 12,
	},

	text: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 4,
	},
});
