import {Image, View} from "react-native";
import Text from "@/components/Text";
import {TextSize} from "@/enums/TextSize";
import {StyleSheet} from "react-native";

export default function Article() {
	return (
		<View style={styles.container}>
			<Image style={styles.articleImage} source={{
				uri: 'https://media.bunjang.co.kr/product/280399572_1_1721393064_w180.jpg'
			}} />
			<View style={styles.contentContainer}>
				<Text size={TextSize.BodyLarge} color={'grayScale.primary90'}>아이폰se3 256기가 미개봉 제품</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 16,

		display: 'flex',
		flexDirection: 'row',
		gap: 12,
	},
	articleImage: {
		width: 115,
		height: 115,

		borderRadius: 8,
	},
	contentContainer: {
		paddingVertical: 4,
	}
})