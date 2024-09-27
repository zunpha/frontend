import {StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import ProfileFilledIcon from "@/components/icons/ProfileFilledIcon";
import {StyleSheet, useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";

interface AuctionParticipatingUserProps {

}

export default function AuctionParticipatingUser({}: AuctionParticipatingUserProps) {
	const colorScheme = useColorScheme() ?? 'light';
	return (
		<>
			<View style={styles.container}>
				<ProfileFilledIcon size={18} fill={Colors[colorScheme]['grayScale.primary60']} />
				<StyledText size={TextSize.BodySmall} color={'grayScale.primary50'}>10명</StyledText>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 2,
	}
})