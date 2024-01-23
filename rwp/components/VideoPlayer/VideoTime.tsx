import {usePlayer} from "@/hooks/usePlayer";
import {secondsToMinutes} from "@/utils";
import {useShallow} from "zustand/react/shallow";

const VideoTime = () => {
	const {videoDuration, videoCurrentTime} = usePlayer(
		useShallow((state) => ({
			videoDuration: state.videoState.videoDuration,
			videoCurrentTime: state.videoState.videoCurrentTime,
		}))
	);
	return (
		<div className='flex items-center gap-1 ml-1.5'>
			<p className='text-base'>{videoCurrentTime}</p>
			<p className='text-base'>/</p>
			<p className='text-base'>{secondsToMinutes(videoDuration)}</p>
		</div>
	);
};
export default VideoTime;
