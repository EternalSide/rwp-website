import {useEffect} from "react";
import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useFullScreen = () => {
	const {containerRef, videoRef, progressBarRef, setVideoState, isFullscreen} =
		usePlayer(
			useShallow((state) => ({
				progressBarRef: state.ref.progressBarRef,
				videoRef: state.ref.videoRef,
				containerRef: state.ref.containerRef,
				setVideoState: state.setVideoState,
				isFullscreen: state.videoState.isFullscreen,
			}))
		);

	const _handleFullScreen = (isFullscreen: boolean, videoElement: any) => {
		if (!isFullscreen) {
			if (videoElement.requestFullscreen) {
				videoElement.requestFullscreen();
			} else if (videoElement.mozRequestFullScreen) {
				videoElement.mozRequestFullScreen();
			} else if (videoElement.webkitRequestFullscreen) {
				videoElement.webkitRequestFullscreen();
			} else if (videoElement.msRequestFullscreen) {
				videoElement.msRequestFullscreen();
			}
		} else {
			if (isFullscreen && document) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	};

	// Переключение Full Screen
	const toggleFullscreen = () => {
		if (containerRef.current) {
			_handleFullScreen(isFullscreen, containerRef.current);
			setVideoState({
				isFullscreen: !isFullscreen,
			});
		}
	};
	// Клик на видео открывает Full Screen
	useEffect(() => {
		const handleDbClick = (e: any) => {
			if (isFullscreen) {
				if (
					videoRef.current.contains(e.target) &&
					!progressBarRef.current.contains(e.target)
				) {
					toggleFullscreen();
				}
			} else {
				if (
					containerRef.current.contains(e.target) &&
					!progressBarRef.current.contains(e.target)
				) {
					toggleFullscreen();
				}
			}
		};
		document.addEventListener("dblclick", handleDbClick);

		return () => {
			document.removeEventListener("dblclick", handleDbClick);
		};
	}, [videoRef, isFullscreen]);

	return {toggleFullscreen};
};
export default useFullScreen;
