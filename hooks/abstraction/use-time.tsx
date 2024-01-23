import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useTime = () => {
	const {videoRef, controls} = usePlayer(
		useShallow((state) => ({
			videoRef: state.ref.videoRef,
			controls: state.options.controls,
		}))
	);

	const time = controls?.forwardTime ? controls.forwardTime : 15;

	const handleChangeTime = (action: "back" | "forward") => {
		if (action === "back") {
			return (videoRef.current.currentTime =
				videoRef.current.currentTime - time);
		}
		if (action === "forward") {
			return (videoRef.current.currentTime =
				videoRef.current.currentTime + time);
		}
	};

	return {handleChangeTime};
};
export default useTime;
