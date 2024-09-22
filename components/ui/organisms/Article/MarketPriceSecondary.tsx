import {StyleSheet, useColorScheme, View} from "react-native";
import MarketChartIcon from "@/components/icons/MarketChartIcon";
import {Colors} from "@/constants/Colors";
import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

export function MarketPriceSecondary({price}: { price: number }) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<>
			<View style={styles.container}>
				<MarketChartIcon size={16} fill={Colors[colorScheme]['grayScale.primary40']} />
				<StyledText size={TextSize.BodySmall} color={'grayScale.primary40'}>
					{price.toLocaleString()}
				</StyledText>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		gap: 2,
	}
})