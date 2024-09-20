import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Stack, Tabs} from 'expo-router';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen
				name="index"
				options={{
					title: 'Tab One',
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
