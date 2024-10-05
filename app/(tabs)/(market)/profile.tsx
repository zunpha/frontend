import {StyledText, View} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";
import ProfileSectionHref from "@/components/ui/molecules/profileHref";
import {useNavigation} from "expo-router";
import {StyleSheet, useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";
import ZPayIcon from "@/components/icons/ZPay";
import SampleProfile from '@/assets/images/sample_profile.png';
import {Image} from 'expo-image';

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
					leftRender={
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingTop: 6,
						}}>
							<Image source={SampleProfile} style={{
								...styles.profile,
								borderColor: Colors[colorScheme]['grayScale.primary40'],
							}}/>
							<View style={{
								gap: 4
							}}>
								<StyledText size={TextSize.BodyLarge} color={'grayScale.primary90'}>서울거래킹</StyledText>
								<StyledText size={TextSize.LabelLarge} color={'grayScale.primary60'}>프로필
									편집하기</StyledText>
							</View>
						</View>
					}
					onPress={() => {
					}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall}
					                        color={'grayScale.primary100'}>팔로우</StyledText>}
					onPress={() => {
					}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>내
						상품</StyledText>}
					onPress={() => {
					}}
				/>
			</View>
			<View style={{
				height: 20,
				backgroundColor: Colors[colorScheme]['grayScale.primary10'],
			}}/>
			<View style={styles.section}>
				<ProfileSectionHref
					leftRender={<ZPayIcon/>}
					onPress={() => {
					}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>알림</StyledText>}
					onPress={() => {
					}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>거래
						기록</StyledText>}
					onPress={() => {
					}}
				/>
				<ProfileSectionHref
					leftRender={<StyledText size={TextSize.HeadingSmall} color={'grayScale.primary100'}>관심
						목록</StyledText>}
					onPress={() => {
					}}
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
	profile: {
		width: 40,
		height: 40,

		marginRight: 12,

		borderRadius: 20,
		borderWidth: 1,
	}
})