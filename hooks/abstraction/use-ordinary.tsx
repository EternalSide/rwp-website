import {useEffect} from "react";
import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useOrdinary = () => {
	const {videoRef, setVideoState, isPaused} = usePlayer(
		useShallow((state) => ({
			videoRef: state.ref.videoRef,
			setVideoState: state.setVideoState,
			isPaused: state.videoState.isPaused,
		}))
	);

	useEffect(() => {
		if (isPaused) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	}, [isPaused]);

	const handleVideoClick = () => {
		if (!isPaused) {
			setVideoState({
				isPaused: true,
			});
			videoRef.current.pause();
		} else {
			setVideoState({
				isPaused: false,
			});
			videoRef.current.play();
		}
	};

	return {handleVideoClick};
};
export default useOrdinary;
