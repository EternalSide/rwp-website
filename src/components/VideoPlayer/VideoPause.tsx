import {usePlayer} from "../../hooks/usePlayer";
import {PauseIcon, PlayIcon} from "lucide-react";
import {useShallow} from "zustand/react/shallow";

const VideoPause = () => {
	const {isPaused, setVideoState, iconSize} = usePlayer(
		useShallow((state) => ({
			isPaused: state.videoState.isPaused,
			setVideoState: state.setVideoState,
			iconSize: state.options.size?.iconSize,
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
				style={iconSize}
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
				style={iconSize}
			/>
		</button>
	);
};
export default VideoPause;
