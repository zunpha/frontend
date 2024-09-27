import {Article} from "@/components/ui/organisms";
import useRefreshControl from "@/hooks/useRefreshControl";
import {RefreshControl, ScrollView} from "react-native";
import {StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

export default function PageMarketAuction() {
	const img_url = 'https://image.ajd.co.kr/EDITOR/CONTENT/e5723007-c027-4cdb-bf5b-6e260b0e1796';

	const {refreshControlProps} = useRefreshControl({
		onRefresh: () => {

		},
		timeout: 2000,
	});

	return (
		<ScrollView refreshControl={
			<RefreshControl {...refreshControlProps} />
		}>
			<Article imageUrl={img_url} title={'ㅇ️'}>
				<StyledText size={TextSize.LabelLarge} color={'grayScale.primary70'}>입찰 시작가</StyledText>
				<Article.PriceText price={500_000}/>
				<View style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 8
				}}>
					<Article.AuctionParticipatingUser />
					<Article.AuctionRemainingTime />
				</View>
			</Article>
		</ScrollView>
	)
}