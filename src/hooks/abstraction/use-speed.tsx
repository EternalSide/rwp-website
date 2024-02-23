import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useSpeed = () => {
	const {
		videoRef,
		speedValues,
		speedContainerRef,
		activeSpeedValue,
		isSpeedContainerOpen,
		set,
		baseColor,
		iconSize,
	} = usePlayer(
		useShallow((state) => ({
			videoRef: state.ref.videoRef,
			speedContainerRef: state.ref.speedContainerRef,
			speedValues: state.videoState.speedValues,
			activeSpeedValue: state.videoState.activeSpeedValue,
			isSpeedContainerOpen: state.videoState.isSpeedContainerOpen,
			set: state.setVideoState,
			baseColor: state.options.colors?.baseColor,
			iconSize: state.options.size?.iconSize,
		}))
	);

	const setSpeedIsOpen = (value: boolean) => set({isSpeedContainerOpen: value});

	const handleChangeSpeed = (speedValue: number) => {
		videoRef.current.playbackRate = speedValue;
		set({activeSpeedValue: speedValue, isSpeedContainerOpen: false});
	};

	return {
		speedValues,
		speedContainerRef,
		activeSpeedValue,
		isSpeedContainerOpen,
		setSpeedIsOpen,
		handleChangeSpeed,
		baseColor,
		iconSize,
	};
};
export default useSpeed;
