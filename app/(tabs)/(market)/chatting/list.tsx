import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import useRefreshControl from '@/hooks/useRefreshControl';
import { View } from '@/components/ui/atoms';
import ChatListItem from '@/components/ui/organisms/ChatListItem';

export default function PageMarketHomePosts() {
	const img_url = 'https://media.bunjang.co.kr/product/280399572_1_1721393064_w180.jpg';

	const { refreshControlProps } = useRefreshControl({
		onRefresh: () => {

		},
		timeout: 2000,
	});

	return (
		<>
			<ScrollView refreshControl={
				<RefreshControl { ...refreshControlProps } />
			}>
				<View style={ styles.chatList }>
					{
						Array.from({ length: 14 }).map((_, index) => (
							<ChatListItem title={ 'Name' } description={ 'test' }
							              imageUrl={ 'https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG' }
							              time={ '1시간 전' }
							              profileImageUrl={ 'https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg' }
							/>
						))
					}
				</View>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	chatList: {
		paddingHorizontal: 16,
	},
});

