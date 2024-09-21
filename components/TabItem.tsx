import React, {cloneElement, ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import {Href, useRouter} from 'expo-router';
import Text from '@/components/Text';
import {TextSize} from '@/enums/TextSize';
import {Colors} from "@/constants/Colors";

interface TabItemProps {
	path: Href<string | object>;
	isActive: boolean;
	label: string;
	icon: ReactElement;
}

export function TabItem({path, isActive, label, icon}: TabItemProps) {
	const router = useRouter();
	const colorScheme = useColorScheme() ?? 'light';

	const modifiedIcon = cloneElement(icon, {
		fill: isActive ? Colors[colorScheme]['grayScale.primary100'] : Colors[colorScheme]['grayScale.primary40'],
	})

	const handlePress = () => {
		router.push(path);
	};

	return (
		<TouchableOpacity
			style={[styles.tabBarContent, {borderBottomWidth: isActive ? 2 : 0, borderBottomColor: Colors[colorScheme]['grayScale.primary100']}]}
			activeOpacity={1}
			onPress={handlePress}
		>
			<Text
				size={TextSize.HeadingSmall}
				color={isActive ? 'grayScale.primary100' : 'grayScale.primary40'}
				style={{marginTop: isActive ? 2 : 0}}
			>
				{label}
			</Text>
			{modifiedIcon}
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