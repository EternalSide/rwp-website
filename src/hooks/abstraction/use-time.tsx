import {useEffect} from "react";
import {formatVideoTime} from "../../utils";
import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useTime = () => {
	const {videoRef, controls, setVideoState, iconSize} = usePlayer(
		useShallow((state) => ({
			videoRef: state.ref.videoRef,
			controls: state.options.controls,
			setVideoState: state.setVideoState,
			iconSize: state.options.size?.iconSize,
		}))
	);

	const time = controls?.forwardTime ? controls.forwardTime : 15;

	useEffect(() => {
		const handleKeyPress = (event: any) => {
			if (event.keyCode === 37) {
				event.preventDefault();
				handleChangeTime("back");
			}
			if (event.keyCode === 39) {
				event.preventDefault();
				handleChangeTime("forward");
			}
		};

		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

	const handleChangeTime = async (action: "back" | "forward") => {
		const formattedTime = formatVideoTime(videoRef.current.currentTime);

		setVideoState({
			videoCurrentTime: formattedTime,
			progress:
				(videoRef.current.currentTime / videoRef.current.duration) * 100,
		});

		if (action === "back") {
			videoRef.current.currentTime = videoRef.current.currentTime - time;
		}
		if (action === "forward") {
			videoRef.current.currentTime = videoRef.current.currentTime + time;
		}
	};

	return {handleChangeTime, iconSize};
};
export default useTime;
