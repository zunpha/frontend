import React from 'react';
import { Stack } from 'expo-router';

export default function TabLayout() {
	return (
		<Stack
			initialRouteName="(market)/auction"
			screenOptions={ {
				headerShown: false,
			} }
		>
			<Stack.Screen
				name="(market)"
			/>
			<Stack.Screen
				name="index"
				options={ {
					title: 'Index',
				} }
			/>
			<Stack.Screen
				name="(onboard)"
				options={{
					title: 'Onboard',
				} }
			/>
			<Stack.Screen
				name="two"
				options={ {
					title: 'Tab Two',
				} }
			/>
		</Stack>
	);
}
