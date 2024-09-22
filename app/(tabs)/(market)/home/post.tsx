import {ScrollView} from "react-native";
import Article from "@/components/Article";
import View from "@/components/views/View";
import TransactionTag from "@/components/TransactionTag";
import {TransactionType} from "@/types/transaction";

export default function PageMarketHomePosts() {
	return (
		<>
			<ScrollView>
				<Article
					imageUrl={'https://media.bunjang.co.kr/product/280399572_1_1721393064_w180.jpg'}
					title={'아이폰 12 프로 맥스 256GB 실버'}
				>
					<View style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}>
						<Article.PriceText price={1_500_000} />
						<Article.LocationAndTime location={'강남구'} time={'1시간 전'} />
					</View>
					<Article.MarketPriceSecondary price={1_500_000} />
					<TransactionTag type={TransactionType.Reserved} />
				</Article>
			</ScrollView>
		</>
	)
}

