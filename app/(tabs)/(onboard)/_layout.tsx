import React from 'react';
import { router, Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from '@/components/icons/BackIcon';
import View from '@/components/views/View';

export default function OnboardLayout() {
	return (
		<>
			<SafeAreaView>
				<View style={ styles.topBar }>
					<TouchableOpacity onPress={ () => {
						router.back();
					} }>
						<BackIcon />
					</TouchableOpacity>
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
});
