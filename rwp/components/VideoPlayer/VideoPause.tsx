import {usePlayer} from "@/hooks/usePlayer";
import {PauseIcon, PlayIcon} from "lucide-react";
import {useShallow} from "zustand/react/shallow";

const VideoPause = () => {
	const {isPaused, setVideoState} = usePlayer(
		useShallow((state) => ({
			isPaused: state.videoState.isPaused,
			setVideoState: state.setVideoState,
		}))
	);

	return isPaused ? (
		<button
			onClick={() => {
				setVideoState({
					isPaused: false,
				});
			}}
		>
			<PlayIcon
				fill='white'
				className='player__icon'
			/>
		</button>
	) : (
		<button
			onClick={() => {
				setVideoState({
					isPaused: true,
				});
			}}
		>
			<PauseIcon
				fill='white'
				className='player__icon'
			/>
		</button>
	);
};
export default VideoPause;
