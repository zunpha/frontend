import Svg, {Path} from "react-native-svg";

interface MarketChartProps {
	fill?: string;
	size?: number;
}

export default function MarketChartIcon({fill, size = 24}: MarketChartProps) {
	return (
		<Svg
			width={size}
			height={size}
			fill={fill}
			viewBox="0 -960 960 960"
		>
			<Path
				d="M240-160q-33 0-56.5-23.5T160-240v-160q0-33 23.5-56.5T240-480q33 0 56.5 23.5T320-400v160q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240v-480q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v480q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240v-280q0-33 23.5-56.5T720-600q33 0 56.5 23.5T800-520v280q0 33-23.5 56.5T720-160Z"/>
		</Svg>
	)
}