import {useCallback, useEffect} from "react";
import {usePlayer} from "../usePlayer";
import {useShallow} from "zustand/react/shallow";

const useVolume = () => {
	const {
		volumeRef,
		videoRef,
		currentVolume,
		isVolumeMuted,
		setVideoState,
		lastVolumeValue,
	} = usePlayer(
		useShallow((state) => ({
			volumeRef: state.ref.volumeRef,
			videoRef: state.ref.videoRef,
			currentVolume: state.videoState.currentVolume,
			isVolumeMuted: state.videoState.isVolumeMuted,
			setVideoState: state.setVideoState,
			lastVolumeValue: state.videoState.lastVolumeValue,
		}))
	);

	// Установка предудыщего значения громкости при перезаходе
	useEffect(() => {
		const volumeValue = Number(localStorage.getItem("volume"));
		if (volumeValue) {
			videoRef.current.volume = volumeValue;
			setVideoState({
				currentVolume: volumeValue,
			});

			if (volumeValue === 0) {
				setVideoState({
					currentVolume: 0,
					isVolumeMuted: true,
				});
			}
		}
	}, [videoRef?.current]);

	useEffect(() => {
		if (currentVolume === 0) {
			setVideoState({
				isVolumeMuted: true,
			});
		} else {
			setVideoState({
				isVolumeMuted: false,
			});
		}
	}, [currentVolume]);

	const handleMuteVolume = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();

			if (!isVolumeMuted) {
				setVideoState({
					isVolumeMuted: true,
					currentVolume: 0,
					lastVolumeValue: videoRef.current.volume,
				});
				videoRef.current.volume = 0;
				localStorage.setItem("volume", "0");
			} else {
				setVideoState({
					isVolumeMuted: false,
					currentVolume: lastVolumeValue,
				});

				videoRef.current.volume = lastVolumeValue;
			}
		},
		[isVolumeMuted, lastVolumeValue, videoRef]
	);

	const handleVolumeClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			// Ширина прогресс-бара
			const volumeBarWidth = volumeRef.current.offsetWidth;

			// Позиция клика
			const clickX = Math.max(
				0,
				Math.min(
					event.clientX - volumeRef.current.getBoundingClientRect().left,
					volumeBarWidth
				)
			);

			const volumePercentage = clickX / 100;

			const volume = volumePercentage < 0.05 ? 0 : volumePercentage;

			setVideoState({
				currentVolume: volume,
			});
			videoRef.current.volume = volume;
			localStorage.setItem("volume", String(volume));
		},
		[volumeRef, videoRef]
	);

	const handleVolumeDrag = useCallback(
		(e: any) => {
			e.preventDefault();

			const volumeBar = volumeRef.current;
			const video = videoRef.current;

			const handleMouseMove = (e: any) => {
				const volumeBarRect = volumeBar.getBoundingClientRect();

				const clickX = e.clientX - volumeBarRect.left;
				const volumePercentage = clickX / 100;

				if (volumePercentage <= 1 && volumePercentage >= 0) {
					const volume = volumePercentage < 0.05 ? 0 : volumePercentage;
					setVideoState({
						currentVolume: volume,
					});
					video.volume = volume;
					localStorage.setItem("volume", String(volume));
				}
			};

			const handleMouseUp = () => {
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseup", handleMouseUp);
			};

			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		},
		[volumeRef, videoRef]
	);

	return {handleVolumeClick, handleVolumeDrag, handleMuteVolume};
};
export default useVolume;
