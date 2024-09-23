import {StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import MarketChartIcon from "@/components/icons/MarketChartIcon";
import {useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";

interface MarketPriceProps {
	price: number
}

export default function MarketPrice({price}: MarketPriceProps) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<>
			<View style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: 4,
			}}>
				<MarketChartIcon size={24} fill={Colors[colorScheme]['brand.blue60']} />
				<StyledText size={TextSize.HeadingSmall} color={'brand.blue60'}>{price.toLocaleString()}</StyledText>
			</View>
		</>
	)
}