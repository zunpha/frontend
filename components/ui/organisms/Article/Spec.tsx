import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

interface SpecProps {
	text: string
}

export default function Spec({text}: SpecProps) {
	return (
		<>
			<StyledText size={TextSize.BodySmall} color={'grayScale.primary50'}>{text}</StyledText>
		</>
	)
}