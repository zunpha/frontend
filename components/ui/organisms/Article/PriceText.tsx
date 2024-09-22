import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

export function PriceText({price}: { price: number }) {
	return (
		<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>
			{price.toLocaleString()}원
		</StyledText>
	)
}