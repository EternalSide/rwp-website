import {useEffect} from "react";
import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useOrdinary = () => {
	const {videoRef, setVideoState, isPaused, isVolumeMuted, videoUrl} =
		usePlayer(
			useShallow((state) => ({
				videoRef: state.ref.videoRef,
				setVideoState: state.setVideoState,
				isPaused: state.videoState.isPaused,
				isVolumeMuted: state.videoState.isVolumeMuted,
				videoUrl: state.videoState.videoUrl,
			}))
		);

	useEffect(() => {
		if (isPaused) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	}, [isPaused]);

	useEffect(() => {
		setVideoState({
			progress: 0,
			isPaused: false,
			videoCurrentTime: "0:00",
		});
	}, [videoUrl]);

	useEffect(() => {
		const handleKeyPress = (event: any) => {
			if (event.keyCode === 32) {
				event.preventDefault();
				handleVideoClick();
			}
		};

		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
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

	return {handleVideoClick, isVolumeMuted, videoRef};
};
export default useOrdinary;
