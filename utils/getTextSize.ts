// utils/getSizeStyle.ts
import { TextSize } from '@/enums/TextSize';
import { TextStyle } from 'react-native';

export const getSizeStyle = (size: TextSize): TextStyle => {
	const sizeMapping: { [key in TextSize]: { fontSize: number, lineHeight: number } } = {
		[TextSize.DisplayLarge]: { fontSize: TextSize.DisplayLarge, lineHeight: TextSize.DisplayLarge },
		[TextSize.DisplayMedium]: { fontSize: TextSize.DisplayMedium, lineHeight: TextSize.DisplayMedium },
		[TextSize.DisplaySmall]: { fontSize: TextSize.DisplaySmall, lineHeight: TextSize.DisplaySmall },
		[TextSize.TitleLarge]: { fontSize: TextSize.TitleLarge, lineHeight: 36 },
		[TextSize.TitleMedium]: { fontSize: TextSize.TitleMedium, lineHeight: 32 },
		[TextSize.TitleSmall]: { fontSize: TextSize.TitleSmall, lineHeight: 28 },
		[TextSize.HeadingLarge]: { fontSize: TextSize.HeadingLarge, lineHeight: 28 },
		[TextSize.HeadingSmall]: { fontSize: TextSize.HeadingSmall, lineHeight: 24 },
		[TextSize.BodyLarge]: { fontSize: TextSize.BodyLarge, lineHeight: 20 },
		[TextSize.BodySmall]: { fontSize: TextSize.BodySmall, lineHeight: 18 },
		[TextSize.LabelLarge]: { fontSize: TextSize.LabelLarge, lineHeight: 16 },
		[TextSize.LabelSmall]: { fontSize: TextSize.LabelSmall, lineHeight: 14 },
	};

	return sizeMapping[size];
};