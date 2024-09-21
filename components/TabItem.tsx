import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Href, useRouter} from 'expo-router';
import Text from '@/components/Text';
import {TextSize} from '@/enums/TextSize';

interface TabItemProps {
	path: Href<string | object>;
	isActive: boolean;
	label: string;
}

export function TabItem({path, isActive, label}: TabItemProps) {
	const router = useRouter();

	const handlePress = () => {
		router.push(path);
	};

	return (
		<TouchableOpacity
			style={[styles.tabBarContent, {borderBottomWidth: isActive ? 2 : 0}]}
			activeOpacity={0.5}
			onPress={handlePress}
		>
			<Text
				size={TextSize.HeadingSmall}
				color={isActive ? 'grayScale.primary100' : 'grayScale.primary40'}
				style={{marginTop: isActive ? 2 : 0}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	tabBarContent: {
		width: 'auto',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});