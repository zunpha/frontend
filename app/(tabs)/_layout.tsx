import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Stack} from 'expo-router';

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
	return (
		<Stack
			initialRouteName="onboard/index"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="onboard/index"
				options={{
					title: 'Onboard',
				}}
			/>
			<Stack.Screen
				name="two"
				options={{
					title: 'Tab Two',
				}}
			/>
		</Stack>
	);
}