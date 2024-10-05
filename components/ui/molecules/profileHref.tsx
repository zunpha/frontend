import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import {StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";

interface ProfileSectionHrefProps {
	leftRender: React.ReactNode;
	onPress: () => void;
}

export default function ProfileSectionHref({leftRender, onPress}: ProfileSectionHrefProps) {
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{leftRender}
			<ArrowRightIcon size={22} fill={Colors[colorScheme]['grayScale.primary50']} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: 40,

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingHorizontal: 28,
	}
})