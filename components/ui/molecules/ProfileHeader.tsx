import {StyledText, View} from "@/components/ui/atoms";
import {StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import {TextSize} from "@/enums/TextSize";
import {Colors} from "@/constants/Colors";
import DotMenuIcon from "@/components/icons/DotMenu";
import {router} from "expo-router";

interface ProfileHeaderProps {
	name: string;
}

export default function ProfileHeader({name}: ProfileHeaderProps) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => router.back()}>
				<ArrowLeftIcon fill={Colors[colorScheme]['grayScale.primary50']} />
			</TouchableOpacity>
			<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary90'}>{name}</StyledText>
			<TouchableOpacity>
				<DotMenuIcon fill={Colors[colorScheme]['grayScale.primary50']} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 40,

		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingHorizontal: 16,
	}
})