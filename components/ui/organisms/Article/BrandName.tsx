import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

interface BrandNameProps {
	brandName: string
}

export default function BrandName({brandName}: BrandNameProps) {
	return (
		<>
			<StyledText size={TextSize.BodySmall} color={'grayScale.primary50'}>{brandName}</StyledText>
		</>
	)
}