import {Slot, useSegments} from "expo-router";
import {TabBar} from "@/components/TabBar";
import {TabItem} from "@/components/TabItem";

export default function LayoutMarketHome() {
	const segments: string[] = useSegments();

	return (
		<>
			<TabBar>
		        <TabItem path="/(market)/home/post" isActive={segments.includes('post')} label="게시물" />
		        <TabItem path="/(market)/home/price" isActive={segments.includes('price')} label="시세 확인" />
		        <TabItem path="/(market)/home/ranking" isActive={segments.includes('ranking')} label="랭킹" />
			</TabBar>
			<Slot />
		</>
	)
}