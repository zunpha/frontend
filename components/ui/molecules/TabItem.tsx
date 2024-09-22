import React from 'react';
import {StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import {Href, useRouter} from 'expo-router';
import {TextSize} from '@/enums/TextSize';
import {Colors} from "@/constants/Colors";
import {StyledText} from "@/components/ui/atoms";

interface TabItemProps {
	path: Href<string | object>;
	isActive: boolean;
	label: string;
}

export default function TabItem({path, isActive, label}: TabItemProps) {
	const router = useRouter();
	const colorScheme = useColorScheme() ?? 'light';

	const handlePress = () => {
		router.push(path);
	};

	return (
		<TouchableOpacity
			style={[styles.tabBarContent, {borderBottomWidth: isActive ? 2 : 0, borderBottomColor: Colors[colorScheme]['grayScale.primary100']}]}
			activeOpacity={1}
			onPress={handlePress}
		>
			<StyledText
				size={TextSize.HeadingSmall}
				color={isActive ? 'grayScale.primary100' : 'grayScale.primary40'}
				style={{marginTop: isActive ? 2 : 0}}
			>
				{label}
			</StyledText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	tabBarContent: {
		width: 'auto',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6
	},
});