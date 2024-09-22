import {Slot, useSegments} from "expo-router";
import {SafeAreaView} from "react-native";
import {TabBar, TabItem} from "@/components/ui/molecules";
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
					/>
					<TabItem
						path="/(market)/home/price"
						isActive={segments.includes('price')}
						label="시세확인"
					/>
					<TabItem
						path="/(market)/home/ranking"
						isActive={segments.includes('ranking')}
						label="랭킹"
					/>
				</TabBar>
				<Slot/>
			</SafeAreaView>
		</>
	)
}