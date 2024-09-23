import {Article} from "@/components/ui/organisms";
import {RefreshControl, ScrollView} from "react-native";
import {useCallback, useState} from "react";

export default function PageMarketHomePrice() {
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	const img_url = 'https://image.ajd.co.kr/EDITOR/CONTENT/e5723007-c027-4cdb-bf5b-6e260b0e1796'
	return (
		<>
			<ScrollView refreshControl={
	            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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