import {formatVideoTime, getSecondsFromWidth} from "@/utils";
import {useEffect} from "react";
import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useProgress = () => {
	const {
		progressBarRef,
		videoRef,
		setVideoState,
		videoDuration,
		progress,
		colors,
	} = usePlayer(
		useShallow((state) => ({
			progressBarRef: state.ref.progressBarRef,
			videoRef: state.ref.videoRef,
			setVideoState: state.setVideoState,
			videoDuration: state.videoState.videoDuration,
			progress: state.videoState.progress,
			colors: state.options.colors,
		}))
	);

	useEffect(() => {
		if (videoRef?.current?.duration) {
			setVideoState({
				videoDuration: videoRef?.current?.duration
					? videoRef.current.duration
					: 0,
			});
		}
	}, [videoRef.current]);

	const handleUpdateProgress = (e: React.ChangeEvent<HTMLVideoElement>) => {
		const formattedTime = formatVideoTime(e);

		setVideoState({
			videoCurrentTime: formattedTime,
			progress: (e.target.currentTime / e.target.duration) * 100,
		});
	};

	const handleBuffering = () => {
		setVideoState({
			isBuffering: false,
		});
	};

	// Клик на прогресс бар
	const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const seconds = getSecondsFromWidth(e, progressBarRef, videoDuration);
		setVideoState({
			isBuffering: true,
			progress: (seconds / videoDuration) * 100,
		});

		videoRef.current.currentTime = seconds;
		videoRef.current.frame = seconds;
	};

	const handleProgressBarDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();

		const progressBar = progressBarRef.current;
		const video = videoRef.current;

		const handleMouseMove = (e: any) => {
			const progressBarRect = progressBar.getBoundingClientRect();
			const clickX = e.clientX - progressBarRect.left;
			const progressPercentage = (clickX / progressBarRect.width) * 100;
			if (progressPercentage >= 0 && progressPercentage <= 100) {
				setVideoState({
					progress: progressPercentage,
				});

				video.currentTime = (progressPercentage / 100) * videoDuration;
			}
		};

		const handleMouseUp = () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	return {
		handleUpdateProgress,
		handleBuffering,
		handleProgressBarClick,
		handleProgressBarDragStart,
		progressBarRef,
		videoDuration,
		progress,
		colors,
	};
};
export default useProgress;
