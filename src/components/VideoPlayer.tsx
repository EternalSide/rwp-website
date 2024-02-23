// Сам плеер, да. Нам нужен тока URL!
import {useEffect, useRef, useState} from "react";
import VideoDisplay from "./VideoPlayer/VideoDisplay";
import VideoControls from "./VideoPlayer/VideoControls";
import {VideoPlayerProps} from "../types/index";
import {usePlayer} from "../hooks/";
import VideoPauseBuffering from "./VideoPlayer/VideoPauseBuffering";
import {useShallow} from "zustand/react/shallow";
import {forwardRef} from "react";

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoProps & VideoPlayerProps>(
	({className, url, options, ...props}, ref) => {
		const [isHover, setIsHover] = useState(false);
		const [hydration, setHydration] = useState(false);
		const videoRef = useRef<HTMLVideoElement>(null);
		const containerRef = useRef<HTMLDivElement>(null);
		const progressBarRef = useRef<HTMLDivElement>(null);
		const volumeRef = useRef<HTMLDivElement>(null);
		const speedContainerRef = useRef<HTMLDivElement>(null);

		const {setRef, setOptions, setVideoState} = usePlayer(
			useShallow((state) => ({
				setRef: state.setRef,
				setOptions: state.setOptions,
				setVideoState: state.setVideoState,
			}))
		);

		useEffect(() => {
			setRef({
				videoRef,
				containerRef,
				progressBarRef,
				volumeRef,
				speedContainerRef,
			});

			if (options) {
				setOptions(options);
			}
			if (url) {
				setVideoState({videoUrl: url});
			}
		}, [url]);

		useEffect(() => {
			setHydration(true);
		}, []);

		if (!hydration) return null;

		return (
			<div
				style={props?.style && props.style}
				ref={containerRef}
				className={`relative h-full ${className ? className : ""}`}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<VideoDisplay
					videoUrl={url}
					{...props}
				/>
				<VideoPauseBuffering />
				<VideoControls
					videoUrl={url}
					isHover={isHover}
					progressBarRef={progressBarRef}
				/>
			</div>
		);
	}
);
VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
