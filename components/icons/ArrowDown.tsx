import Svg, {Path} from "react-native-svg";

interface ArrowDownIconProps {
	fill?: string;
	size?: number;
}

export default function ArrowDownIcon({fill, size = 24}: ArrowDownIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			fill={fill}
			viewBox="0 -960 960 960"
		>
			<Path d="M480-360 280-560h400L480-360Z"/>
		</Svg>
	)
}