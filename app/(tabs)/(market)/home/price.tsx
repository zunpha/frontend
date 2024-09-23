import {Article} from "@/components/ui/organisms";
import {RefreshControl, ScrollView} from "react-native";
import useRefreshControl from "@/hooks/useRefreshControl";

export default function PageMarketHomePrice() {
	const img_url = 'https://image.ajd.co.kr/EDITOR/CONTENT/e5723007-c027-4cdb-bf5b-6e260b0e1796';

	const { refreshControlProps } = useRefreshControl({
	    onRefresh: () => {

	    },
	    timeout: 2000,
	});

	return (
		<>
			<ScrollView refreshControl={
	            <RefreshControl {...refreshControlProps} />
	        }>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
				<Article imageUrl={img_url} title={'삼성TV 스마트 UHD 리퍼브 Crystal'}>
					<Article.Spec text={'중고 UHD 기준'}/>
					<Article.MarketPrice price={1_392_900}/>
					<Article.BrandName brandName={'삼성전자'}/>
				</Article>
			</ScrollView>
		</>
	)
}