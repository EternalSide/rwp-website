import {useOrdinary, useProgress} from "../../hooks/abstraction";
import {useEffect} from "react";

const VideoDisplay = ({videoUrl, ...props}: any) => {
	const {handleVideoClick, isVolumeMuted, videoRef} = useOrdinary();
	const {handleUpdateProgress, handleBuffering} = useProgress();

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
			onCanPlay={handleBuffering}
			{...props}
		>
			<source
				src={videoUrl}
				type='video/mp4'
			/>
		</video>
	);
};

export default VideoDisplay;
