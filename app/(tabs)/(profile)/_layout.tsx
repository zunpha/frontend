import {SafeAreaView} from "react-native";
import {Slot} from "expo-router";
import {View} from "@/components/ui/atoms";

export default function LayoutProfile() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<Slot />
		</SafeAreaView>
	)
}