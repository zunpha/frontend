import Svg, {Path} from "react-native-svg";

interface ArrowRightIconProps {
	fill?: string;
	size?: number;
}

export default function ArrowRightIcon({fill, size = 24}: ArrowRightIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			fill={fill}
			viewBox="0 -960 960 960"
		>
			<Path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
		</Svg>
	)
}