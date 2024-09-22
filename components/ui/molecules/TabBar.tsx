import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from '@/constants/Colors';

interface TabBarProps {
	children: React.ReactNode;
}

export default function TabBar({children}: TabBarProps) {
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<View style={[styles.tabBar, {borderBottomColor: Colors[colorScheme]['grayScale.primary10']}]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		height: 52,

		display: 'flex',
		flexDirection: 'row',
		gap: 14,

		borderBottomWidth: 1,

		paddingHorizontal: 16,
	},
});