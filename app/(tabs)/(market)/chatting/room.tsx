import { RefreshControl, ScrollView } from 'react-native';
import { TransactionTag, View } from '@/components/ui/atoms';
import { TransactionType } from '@/types/transaction';
import { Article } from '@/components/ui/organisms';
import useRefreshControl from '@/hooks/useRefreshControl';

export default function PageMarketHomePosts() {
	const img_url = 'https://media.bunjang.co.kr/product/280399572_1_1721393064_w180.jpg';

	const { refreshControlProps } = useRefreshControl({
		onRefresh: () => {

		},
		timeout: 2000,
	});

	return (
		<>
			<ScrollView refreshControl={
				<RefreshControl { ...refreshControlProps } />
			}>
				<Article imageUrl={ img_url } title={ '아이폰 12 프로 맥스 256GB 실버' }>
					<View style={ {
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					} }>
						<Article.PriceText price={ 1_500_000 } />
						<Article.LocationAndTime location={ '강남구' } time={ '1시간 전' } />
					</View>
					<Article.MarketPriceSecondary price={ 1_500_000 } />
					<TransactionTag type={ TransactionType.Reserved } />
				</Article>
			</ScrollView>
		</>
	);
}

