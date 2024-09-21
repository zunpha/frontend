import {Slot, useSegments} from "expo-router";
import {TabBar} from "@/components/TabBar";
import {TabItem} from "@/components/TabItem";
import {SafeAreaView} from "react-native";
import QueryStatsIcon from "@/components/icons/QueryStatsIcon";
import CartIcon from "@/components/icons/CardIcon";
import StarIcon from "@/components/icons/StarIcon";

export default function LayoutMarketHome() {
	const segments: string[] = useSegments();

	return (
		<>
			<SafeAreaView>
				<TabBar>
					<TabItem
						path="/(market)/home/post"
						isActive={segments.includes('post')}
						label="게시물"
						icon={<CartIcon size={18} />}
					/>
					<TabItem
						path="/(market)/home/price"
						isActive={segments.includes('price')}
						label="시세 확인"
						icon={<QueryStatsIcon size={18} />}
					/>
					<TabItem
						path="/(market)/home/ranking"
						isActive={segments.includes('ranking')}
						label="랭킹"
						icon={<StarIcon size={18} />}
					/>
				</TabBar>
				<Slot/>
			</SafeAreaView>
		</>
	)
}