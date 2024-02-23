import {VideoState, ZustandPlayerState} from "../types/";
import {create} from "zustand";
/**
 * Главный и единственный хук react-web-player
 ** Использование не обязательно, позволяет вам напрямую менять/просматривать состояние плеера
 ** Работает из любой части приложения без провайдеров
 */
export const usePlayer = create<ZustandPlayerState>((set) => ({
	videoState: {
		isPaused: true,
		isVolumeMuted: false,
		isFullscreen: false,
		isBuffering: false,
		isSpeedContainerOpen: false,
		currentVolume: 1,
		lastVolumeValue: 1,
		progress: 0,
		videoDuration: 0,
		activeSpeedValue: 1,
		speedValues: [0.5, 0.75, 1, 1.5, 1.75, 2],
		videoCurrentTime: "0:00",
		videoUrl: undefined,
	},
	ref: {
		videoRef: {current: {}},
		progressBarRef: {current: {}},
		containerRef: {current: {}},
		volumeRef: {current: {}},
		speedContainerRef: {current: {}},
	},
	options: {
		colors: {
			baseColor: "#0ea5e9",
			hideVideoPreviewBorder: false,
		},
		controls: {
			forwardTime: 15,
		},
		preview: {
			hidePreview: true,
		},
		size: {
			iconSize: {
				width: "30px",
				height: "30px",
			},
			controls: {
				height: "56px",
			},
		},
	},
	setRef: (data: any) =>
		set(() => ({
			ref: data,
		})),
	setOptions: (data: any) =>
		set((state) => ({
			options: {
				...state.options,
				...data,
			},
		})),
	setVideoState: (stateData: Partial<VideoState>) =>
		set((state) => ({videoState: {...state.videoState, ...stateData}})),
}));
