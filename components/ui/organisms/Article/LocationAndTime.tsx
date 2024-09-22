import {StyleSheet, View} from "react-native";
import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

export function LocationAndTime({location, time}: { location: string, time: string }) {
	return (
		<View style={styles.container}>
			<StyledText size={TextSize.LabelLarge} color={'grayScale.primary50'}>
				{location}
			</StyledText>
			<StyledText size={TextSize.LabelLarge} color={'grayScale.primary50'}>|</StyledText>
			<StyledText size={TextSize.LabelLarge} color={'grayScale.primary50'}>
				{time}
			</StyledText>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
})