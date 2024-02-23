import {formatVideoTime, getSecondsFromWidth} from "../../utils";
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
		hidePreview,
		hideVideoPreviewBorder,
		videoUrl,
	} = usePlayer(
		useShallow((state) => ({
			progressBarRef: state.ref.progressBarRef,
			videoRef: state.ref.videoRef,
			setVideoState: state.setVideoState,
			videoDuration: state.videoState.videoDuration,
			progress: state.videoState.progress,
			colors: state.options.colors,
			hidePreview: state.options.preview?.hidePreview,
			hideVideoPreviewBorder: state.options.colors?.hideVideoPreviewBorder,
			videoUrl: state.videoState.videoUrl,
		}))
	);

	useEffect(() => {
		if (videoRef?.current) {
			setVideoState({
				videoDuration: videoRef?.current?.duration
					? videoRef.current.duration
					: 0,
				videoCurrentTime: "0:00",
			});
		}
	}, [videoRef?.current?.duration, videoUrl]);

	const handleUpdateProgress = (e: React.ChangeEvent<HTMLVideoElement>) => {
		const formattedTime = formatVideoTime(e);

		setVideoState({
			videoCurrentTime: formattedTime,
			progress: (e.target.currentTime / e.target.duration) * 100,
		});
	};

	const handleBuffering = () =>
		setVideoState({
			isBuffering: false,
		});

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

		const handleMouseMove = (e: any) => {
			const progressBarRect = progressBarRef.current.getBoundingClientRect();
			const clickX = e.clientX - progressBarRect.left;
			const progressPercentage = (clickX / progressBarRect.width) * 100;

			if (progressPercentage >= 0 && progressPercentage <= 100) {
				setVideoState({
					progress: progressPercentage,
				});

				videoRef.current.currentTime =
					(progressPercentage / 100) * videoDuration;
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
		hidePreview,
		hideVideoPreviewBorder,
	};
};
export default useProgress;
