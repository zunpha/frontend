import {StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import {StyleSheet, useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";
import TimeRemaningIcon from "@/components/icons/TimeRemaningIcon";

interface AuctionRemainingTimeProps {

}

export default function AuctionRemainingTime({}: AuctionRemainingTimeProps) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<>
			<View style={styles.container}>
				<TimeRemaningIcon size={18} fill={Colors[colorScheme]['system.negative60']} />
				<StyledText size={TextSize.BodySmall} color={'system.negative50'}>10명</StyledText>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 2,
	}
})