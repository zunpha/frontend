import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [ loaded, error ] = useFonts({
		PretendardBold: require('../assets/fonts/Pretendard-Bold.ttf'),
		PretendardMedium: require('../assets/fonts/Pretendard-Medium.ttf'),
		PretendardRegular: require('../assets/fonts/Pretendard-Regular.ttf'),
		PretendardSemiBold: require('../assets/fonts/Pretendard-SemiBold.ttf'),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [ error ]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [ loaded ]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={ colorScheme === 'dark' ? DarkTheme : DefaultTheme }>
			<Stack screenOptions={ {
				headerStyle: {
					backgroundColor: colorScheme === 'dark' ? Colors.dark['grayScale.primary5'] : Colors.light['grayScale.primary5'],
				},
			} }>
				<Stack.Screen name="(tabs)" options={ { headerShown: false } } />
			</Stack>
		</ThemeProvider>
	);
}
