import {useOrdinary, useProgress} from "@/hooks/abstraction";
import {usePlayer} from "@/hooks/usePlayer";
import {useEffect} from "react";
import {useShallow} from "zustand/react/shallow";

const VideoDisplay = ({videoUrl}: {videoUrl: string}) => {
	const {handleVideoClick} = useOrdinary();
	const {handleUpdateProgress, handleBuffering} = useProgress();
	const {videoRef, isVolumeMuted} = usePlayer(
		useShallow((state) => ({
			videoRef: state.ref.videoRef,
			isVolumeMuted: state.videoState.isVolumeMuted,
			setVideoData: state.setVideoState,
		}))
	);

	useEffect(() => {
		videoRef.current.src = videoUrl;
	}, [videoUrl]);

	return (
		<video
			ref={videoRef}
			className='h-full w-full !rounded-xl object-cover'
			autoPlay={true}
			loop={true}
			muted={isVolumeMuted ? true : false}
			controls={false}
			onClick={handleVideoClick}
			onTimeUpdate={handleUpdateProgress}
			// onEnded={onEnded}
			onCanPlay={handleBuffering}
		>
			<source
				src={videoUrl}
				type='video/mp4'
			/>
		</video>
	);
};

export default VideoDisplay;
