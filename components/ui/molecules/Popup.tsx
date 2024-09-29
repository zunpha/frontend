import BottomSheet, {BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetView} from "@gorhom/bottom-sheet";
import {useCallback, useMemo, useRef} from "react";
import {StyleSheet} from "react-native";
import {StyledText} from "@/components/ui/atoms";
import {TextSize} from "@/enums/TextSize";

const Popup = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	const renderBackdrop = useCallback(
		(props: BottomSheetBackdropProps) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={1}
				appearsOnIndex={2}
			/>
		),
		[]
	);

	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={1}
			onChange={handleSheetChanges}
			snapPoints={snapPoints}
			backdropComponent={renderBackdrop}
		>
			<BottomSheetView style={styles.contentContainer}>
				<StyledText size={TextSize.BodySmall} color={'grayScale.primary50'}>asd</StyledText>
			</BottomSheetView>
		</BottomSheet>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		backgroundColor: 'grey',
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
	},
});

export default Popup;