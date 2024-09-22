import {TransactionType} from "@/types/transaction";
import {StyleSheet, useColorScheme, View} from "react-native";
import {TextSize} from "@/enums/TextSize";
import {Colors} from "@/constants/Colors";
import {IColorToken} from "@/types/color";
import {StyledText} from "@/components/ui/atoms";

interface TransactionTagProps {
    type: TransactionType;
}

export default function TransactionTag({ type }: TransactionTagProps) {
    const colorScheme = useColorScheme() ?? 'light';

    const backgroundColorMap: Record<TransactionType, keyof IColorToken> = {
        [TransactionType.Available]: 'brand.blue50',
        [TransactionType.Reserved]: 'system.warning50',
        [TransactionType.Completed]: 'grayScale.primary50',
    };

    const textMap = {
        [TransactionType.Available]: '거래 가능',
        [TransactionType.Reserved]: '예약중',
        [TransactionType.Completed]: '거래 완료',
    };

	const containerWidth = {
		[TransactionType.Available]: 68,
		[TransactionType.Reserved]: 52,
		[TransactionType.Completed]: 68,
	};

    const backgroundColor = Colors[colorScheme][backgroundColorMap[type]];
    const displayText = textMap[type];

    return (
        <View style={[styles.tag, { backgroundColor, width: containerWidth[type] }]}>
            <StyledText size={TextSize.LabelLarge} color="white">
                {displayText}
            </StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 4,
        paddingHorizontal: 8,

	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',

        borderRadius: 4,
    },
});