import Svg, {Path} from "react-native-svg";

interface HomeIconProps {
	fill?: string;
	size?: number;
}

export default function HomeIcon({fill, size = 24}: HomeIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			fill={fill}
			viewBox="0 -960 960 960"
		>
			<Path
				d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z"/>
		</Svg>
	)
}