import {StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import ProfileSectionHref from "@/components/ui/molecules/profileHref";
import {useNavigation} from "expo-router";
import {StyleSheet, useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";
import ZPayIcon from "@/components/icons/ZPay";

export default function PageProfile() {
	const navigation = useNavigation();
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<View style={{
			...styles.container,
			backgroundColor: Colors[colorScheme]['grayScale.primary10']
		}}>
			<View style={styles.section}>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>팔로우</StyledText>}
					onPress={() => {}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>내 상품</StyledText>}
					onPress={() => {}}
				/>
			</View>
			<View style={{
				height: 20,
				backgroundColor: Colors[colorScheme]['grayScale.primary10'],
			}} />
			<View style={styles.section}>
				<ProfileSectionHref
					leftRender={<ZPayIcon/>}
					onPress={() => {}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>알림</StyledText>}
					onPress={() => {}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>거래 기록</StyledText>}
					onPress={() => {}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>관심 목록</StyledText>}
					onPress={() => {}}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	section: {
		paddingVertical: 12,
		gap: 12,
	},
	divider: {

	}
})