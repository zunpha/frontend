import {Image, StyleSheet, TouchableOpacity, useColorScheme, View} from "react-native";
import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import DotMenuIcon from "@/components/icons/DotMenu";
import {Colors} from "@/constants/Colors";
import {ReactElement} from "react";
import {PriceText} from "./PriceText";
import {LocationAndTime} from "./LocationAndTime";
import {MarketPriceSecondary} from "./MarketPriceSecondary";
import MarketPrice from "@/components/ui/organisms/Article/MarketPrice";
import BrandName from "@/components/ui/organisms/Article/BrandName";
import Spec from "@/components/ui/organisms/Article/Spec";
import AuctionParticipatingUser from "@/components/ui/organisms/Article/AuctionParticipatingUser";
import AuctionRemainingTime from "@/components/ui/organisms/Article/AuctionRemainingTime";

interface ArticleProps {
	imageUrl: string;
	title: string;
	children?: ReactElement[] | ReactElement;
}

export default function Article({imageUrl, title, children}: ArticleProps) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.5}>
			<Image style={styles.articleImage} source={{
				uri: imageUrl
			}}/>
			<View style={styles.contentContainer}>
				<View style={styles.titleContainer}>
					<StyledText size={TextSize.BodyLarge} color={'grayScale.primary90'} style={styles.articleTitle}
					      numberOfLines={1}>
						{title}
					</StyledText>
					<TouchableOpacity style={styles.dotMenuPressable}>
						<DotMenuIcon fill={Colors[colorScheme]['grayScale.primary60']} size={20}/>
					</TouchableOpacity>
				</View>
				{children}
			</View>
		</TouchableOpacity>
	)
}

Article.PriceText = PriceText;
Article.LocationAndTime = LocationAndTime;
Article.MarketPriceSecondary = MarketPriceSecondary;
Article.MarketPrice = MarketPrice;
Article.BrandName = BrandName;
Article.Spec = Spec;
Article.AuctionParticipatingUser = AuctionParticipatingUser;
Article.AuctionRemainingTime = AuctionRemainingTime;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		paddingVertical: 12,

		display: 'flex',
		flexDirection: 'row',
		gap: 16,
	},
	articleImage: {
		width: 120,
		height: 120,

		borderRadius: 8,
	},
	contentContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		paddingVertical: 4,

		flex: 1, // 추가하여 컨텐츠가 이미지와 아이콘 사이에서 적절하게 분배되도록 함
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		gap: 8,
	},
	articleTitle: {
		flexShrink: 1, // 텍스트가 넘치지 않도록 함
		flexWrap: 'wrap', // 필요 시 텍스트가 줄 바꿈되도록 함
	},
	dotMenuPressable: {
		width: 30,
		height: 30,

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 12,

		marginTop: -5, // 아이콘이 텍스트와 수직 정렬되도록 함
		marginRight: -13 // 아이콘이 오른쪽에 붙지 않도록 함
	},
})