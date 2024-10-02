import { Image, ImageSourcePropType, Platform, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { Slot, usePathname, useRouter } from 'expo-router';
import HeaderTitleHome from '@/assets/images/service/header_title_home.png';
import HeaderTitleAuction from '@/assets/images/service/header_title_auction.png';
import HeaderTitleChatting from '@/assets/images/service/header_title_chatting.png';
import HeaderTitleProfile from '@/assets/images/service/header_title_profile.png';
import { View } from '@/components/ui/atoms';
import SearchIcon from '@/components/icons/SearchIcon';
import { Colors } from '@/constants/Colors';
import NotificationIcon from '@/components/icons/NotificationIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import AuctionIcon from '@/components/icons/AuctionIcon';
import AddIcon from '@/components/icons/AddIcon';
import ChatIcon from '@/components/icons/ChatIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import { NavBar } from '@/components/ui/molecules';

function TitleNameImage(title: string): { image: ImageSourcePropType, width: number, height: number } {
	switch (title) {
		case 'homepost':
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
	const router = useRouter();

	const pageNameStr = usePathname().split('/')[1];

	return (
		<SafeAreaView style={ {
			flex: 1,
		} }>
			<View style={ styles.header }>
				<Image
					style={ {
						width: TitleNameImage(pageNameStr).width,
						height: TitleNameImage(pageNameStr).height,
					} }
					source={ TitleNameImage(pageNameStr).image }
				/>
				<View style={ styles.headerIcons }>
					<SearchIcon fill={ Colors[colorScheme]['grayScale.primary80'] } size={ 26 } />
					<NotificationIcon fill={ Colors[colorScheme]['grayScale.primary80'] } size={ 26 } />
				</View>
			</View>
			<Slot />
			<NavBar>
				<NavBar.Item
					icon={ <HomeIcon size={ 26 } /> }
					title={ '홈' }
					selected={ pageName.includes('home') }
					onClick={ () => router.push('/(market)/home/post') }
				/>
				<NavBar.Item
					icon={ <AuctionIcon size={ 26 } /> }
					title={ '경매' }
					selected={ pageName.includes('auction') }
					onClick={ () => router.push('/(market)/auction') }
				/>
				<NavBar.Item
					icon={ <AddIcon size={ 26 } /> }
					title={ '물건 팔기' }
					selected={ pageName.includes('sell') }
				/>
				<NavBar.Item
					icon={ <ChatIcon size={ 26 } /> }
					title={ '채팅' }
					selected={ pageName.includes('chatting') }
					onClick={ () => router.push('/(market)/chatting/list') }
				/>
				<NavBar.Item
					icon={ <ProfileIcon size={ 26 } /> }
					title={ '프로필' }
					selected={ pageName.includes('profile') }
				/>
			</NavBar>
		</SafeAreaView>
	);
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

		marginTop: Platform.OS === 'android' ? 45 : 0,
	},
	headerIcons: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
});