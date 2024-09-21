import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from '@/constants/Colors';

interface TabBarProps {
	children: React.ReactNode;
}

export function TabBar({children}: TabBarProps) {
	const colorScheme = useColorScheme() ?? 'light';

	return (
		<View style={[styles.tabBar, {borderBottomColor: Colors[colorScheme]['grayScale.primary30']}]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		height: 48,

		display: 'flex',
		flexDirection: 'row',
		gap: 12,

		borderBottomWidth: 1,

		paddingHorizontal: 16,
	},
});