import {usePlayer} from "../usePlayer";

const useSpeed = () => {
	const videoRef = usePlayer((state) => state.ref.videoRef);

	const handleChangeSpeed = (speedValue: number) => {
		videoRef.current.playbackRate = speedValue;
	};

	return {
		handleChangeSpeed,
	};
};
export default useSpeed;
