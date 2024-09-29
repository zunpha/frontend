import {Article} from "@/components/ui/organisms";
import useRefreshControl from "@/hooks/useRefreshControl";
import {RefreshControl, ScrollView, StyleSheet, useColorScheme} from "react-native";
import {Select, StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import {useState} from "react";
import {Colors} from "@/constants/Colors";

export default function PageMarketAuction() {
	const colorScheme = useColorScheme() ?? 'light';
	const [filteredCategory, setFilteredCategory] = useState<string>('');

	const img_url = 'https://image.ajd.co.kr/EDITOR/CONTENT/e5723007-c027-4cdb-bf5b-6e260b0e1796';

	const {refreshControlProps} = useRefreshControl({
		onRefresh: () => {

		},
		timeout: 2000,
	});

	return (
		<>
			<View style={{
				...styles.filterContainer,
				borderColor: Colors[colorScheme]['grayScale.primary20'],
			}}>
				<Select
					name={'가격'}
					state={filteredCategory}
					setState={setFilteredCategory}
					render={
						<StyledText size={TextSize.BodyLarge} color={'grayScale.primary70'}>가격</StyledText>
					}
				/>
			</View>
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
						<Article.AuctionParticipatingUser/>
						<Article.AuctionRemainingTime/>
					</View>
				</Article>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	filterContainer: {
		display: 'flex',
		flexDirection: 'row',

		paddingHorizontal: 16,
		paddingVertical: 8,

		borderBottomWidth: 1,
	}
})