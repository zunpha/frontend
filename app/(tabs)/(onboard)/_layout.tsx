import React from 'react';
import { router, Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from '@/components/icons/BackIcon';
import View from '@/components/views/View';
import useToastStore from '@/stores/toastStore';
import Toast from '@/components/Toast';

export default function OnboardLayout() {
	const toasts = useToastStore((state) => state.toasts);

	return (
		<>
			<SafeAreaView style={ {
				flex: 1,
			} }>
				<View style={ styles.topBar }>
					<TouchableOpacity onPress={ () => {
						router.back();
					} }>
						<BackIcon />
					</TouchableOpacity>
				</View>
				<View style={
					styles.toastList
				}>
					{
						toasts.map((toast) => (
							<Toast text={ toast.text } duration={ toast.duration } key={ toast.id } />
						))
					}
				</View>
				<Slot />
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	topBar: {
		width: '100%',
		justifyContent: 'flex-start',
		paddingVertical: 4,
		paddingHorizontal: 16,
	},

	toastList: {
		width: '100%',
		flexDirection: 'column-reverse',
		justifyContent: 'center',
		alignItems: 'center',

		position: 'absolute',
		bottom: 35,

		gap: 10,

		paddingVertical: 12,
		paddingHorizontal: 16,

		zIndex: 1000,
	},
});
