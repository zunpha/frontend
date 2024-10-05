import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import 'react-native-reanimated';

import {Colors} from '@/constants/Colors';
import {useColorScheme} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		PretendardBold: require('../assets/fonts/Pretendard-Bold.ttf'),
		PretendardMedium: require('../assets/fonts/Pretendard-Medium.ttf'),
		PretendardRegular: require('../assets/fonts/Pretendard-Regular.ttf'),
		PretendardSemiBold: require('../assets/fonts/Pretendard-SemiBold.ttf'),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav/>;
}

const MyDefaultTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: Colors['light']['grayScale.primary5'],
	},
};

const MyDarkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		background: Colors['dark']['grayScale.primary5'],
	},
};

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<GestureHandlerRootView style={{flex: 1}}>
			<ThemeProvider value={colorScheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
				<Stack
					initialRouteName="(tabs)/index"
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="(tabs)/index" options={{headerShown: false}}/>
					<Stack.Screen name="(tabs)/(market)"/>
					<Stack.Screen name="(tabs)/(onboard)"/>
					<Stack.Screen name="(tabs)/two"/>
				</Stack>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
