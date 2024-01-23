// Сам плеер, да. Нам нужен тока URL!
import {useEffect, useRef, useState} from "react";
import VideoDisplay from "./VideoPlayer/VideoDisplay";
import VideoControls from "./VideoPlayer/VideoControls";
import {VideoPlayerProps} from "../types/index";
import {usePlayer} from "@/hooks";
import VideoPauseBuffering from "./VideoPlayer/VideoPauseBuffering";
import {useShallow} from "zustand/react/shallow";

const VideoPlayer = ({url, options}: VideoPlayerProps) => {
	const [isHover, setIsHover] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);
	const volumeRef = useRef<HTMLDivElement>(null);

	const {setRef, setOptions} = usePlayer(
		useShallow((state) => ({
			setRef: state.setRef,
			setOptions: state.setOptions,
		}))
	);

	useEffect(() => {
		setRef({
			videoRef,
			containerRef,
			progressBarRef,
			volumeRef,
		});

		if (options) {
			setOptions(options);
		}
	}, [url]);

	return (
		<div
			ref={containerRef}
			className='relative h-full'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<VideoDisplay videoUrl={url} />
			<VideoPauseBuffering />
			<VideoControls
				videoUrl={url}
				isHover={isHover}
				progressBarRef={progressBarRef}
			/>
		</div>
	);
};
export default VideoPlayer;
