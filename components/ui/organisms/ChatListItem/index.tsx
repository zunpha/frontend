import { Image, StyleSheet } from 'react-native';
import { StyledText, View } from '@/components/ui/atoms';
import { TextSize } from '@/enums/TextSize';

interface Props {
	profileImageUrl: string;
	title: string;
	description: string;
	imageUrl: string;
	time: string;
}

export default function ChatListItem({ profileImageUrl, title, description, imageUrl, time }: Props) {
	return (
		<View style={ styles.container }>
			<Image source={ { uri: profileImageUrl } } style={ styles.profileImage } />
			<View style={ styles.leftContainer }>
				<View style={ styles.textContainer }>
					<View style={ styles.topContainer }>
						<StyledText size={ TextSize.BodyLarge } color={ 'grayScale.primary90' }>{ title }</StyledText>
						<StyledText size={ TextSize.LabelLarge } color={ 'grayScale.primary50' }>{ time }</StyledText>
					</View>
					<StyledText size={ TextSize.BodySmall } color={ 'grayScale.primary70' }>{ description }</StyledText>
				</View>
				<Image source={ { uri: imageUrl } } style={ styles.image } />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		gap: 8,

		paddingVertical: 10,
	},

	profileImage: {
		width: 48,
		height: 48,
		borderRadius: 24,
	},

	image: {
		width: 36,
		height: 36,
		borderRadius: 6,
	},

	textContainer: {
		flex: 1,
		flexDirection: 'column',

		gap: 8,
	},

	leftContainer: {
		flex: 1,
		flexDirection: 'row',

		gap: 12,
	},

	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});