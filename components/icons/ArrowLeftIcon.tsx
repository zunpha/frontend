import Svg, {Path} from "react-native-svg";

interface ArrowLeftIconProps {
	fill?: string;
	size?: number;
}

export default function ArrowLeftIcon({fill, size = 24}: ArrowLeftIconProps) {
	return (
		<Svg width={size} height={size} fill={fill} viewBox="0 -960 960 960">
			<Path d="M639-80l-400-400 400-400 71 71-329 329 329 329-71 71Z"/>
		</Svg>
	);
}