import {Image, ImageSourcePropType, SafeAreaView, StyleSheet, useColorScheme} from "react-native";
import {Slot, usePathname} from "expo-router";
import Text from "@/components/Text";
import {TextSize} from "@/enums/TextSize";
import HeaderTitleHome from '@/assets/images/service/header_title_home.png';
import HeaderTitleAuction from '@/assets/images/service/header_title_auction.png';
import HeaderTitleChatting from '@/assets/images/service/header_title_chatting.png';
import HeaderTitleProfile from '@/assets/images/service/header_title_profile.png';
import View from "@/components/views/View";
import SearchIcon from "@/components/icons/SearchIcon";
import {Colors} from "@/constants/Colors";
import NotificationIcon from "@/components/icons/NotificationIcon";

function TitleNameImage(title: string): { image: ImageSourcePropType, width: number, height: number } {
	// Pathname으로 title을 가져올때 Home은 빈 문자열로 오는것을 방지 ('/' -> 'home')
	if(title === '') title = 'home';

	switch (title) {
		case 'home':
			return { image: HeaderTitleHome, width: 24, height: 26 };
		case 'auction':
			return { image: HeaderTitleAuction, width: 46, height: 24 };
		case 'chatting':
			return { image: HeaderTitleChatting, width: 48, height: 26 };
		case 'profile':
			return { image: HeaderTitleProfile, width: 69, height: 26 };
		default:
			return { image: HeaderTitleHome, width: 24, height: 26 };
	}
}

export default function MarketLayout() {
	const pageName = usePathname().replaceAll('/', '');
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<SafeAreaView style={{
			flex: 1,
		}}>
			<View style={styles.header}>
				<Image
					style={{
						width: TitleNameImage(pageName).width,
						height: TitleNameImage(pageName).height,
					}}
			        source={TitleNameImage(pageName).image}
				/>
				<View style={styles.headerIcons}>
					<SearchIcon fill={Colors[colorScheme]['grayScale.primary80']} size={26} />
					<NotificationIcon fill={Colors[colorScheme]['grayScale.primary80']} size={26} />
				</View>
			</View>
			<Text size={TextSize.BodySmall} color={'brand.blue60'}>asd</Text>
			<Slot />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 40,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingHorizontal: 16,
	},
	headerIcons: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	}
})