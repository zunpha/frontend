// utils/getSizeStyle.ts
import { TextSize } from '@/enums/TextSize';
import { TextStyle } from 'react-native';

export const getSizeStyle = (size: TextSize): TextStyle => {
	const text = Object.keys(TextSize)[Object.values(TextSize).indexOf(size)];

	const regular = 'PretendardRegular';
	const medium = 'PretendardMedium';
	const bold = 'PretendardBold';
	const semiBold = 'PretendardSemiBold';

	const sizeMapping: { [key: string]: { fontSize: number, lineHeight: number, fontFamily: string } } = {
		'DisplayLarge': { fontSize: TextSize.DisplayLarge, lineHeight: TextSize.DisplayLarge, fontFamily: semiBold },
		'DisplayMedium': { fontSize: TextSize.DisplayMedium, lineHeight: TextSize.DisplayMedium, fontFamily: semiBold },
		'DisplaySmall': { fontSize: TextSize.DisplaySmall, lineHeight: TextSize.DisplaySmall, fontFamily: semiBold },
		'TitleLarge': { fontSize: TextSize.TitleLarge, lineHeight: 36, fontFamily: semiBold },
		'TitleMedium': { fontSize: TextSize.TitleMedium, lineHeight: 32, fontFamily: semiBold },
		'TitleSmall': { fontSize: TextSize.TitleSmall, lineHeight: 28, fontFamily: semiBold },
		'HeadingLarge': { fontSize: TextSize.HeadingLarge, lineHeight: 28, fontFamily: semiBold },
		'HeadingSmall': { fontSize: TextSize.HeadingSmall, lineHeight: 24, fontFamily: semiBold },
		'BodyLarge': { fontSize: TextSize.BodyLarge, lineHeight: 20, fontFamily: medium },
		'BodySmall': { fontSize: TextSize.BodySmall, lineHeight: 18, fontFamily: medium },
		'LabelLarge': { fontSize: TextSize.LabelLarge, lineHeight: 16, fontFamily: medium },
		'LabelSmall': { fontSize: TextSize.LabelSmall, lineHeight: 14, fontFamily: regular },
	};

	return sizeMapping[text];
};
