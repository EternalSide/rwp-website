import {VideoState, ZustandPlayerState} from "@/rwp/types";
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
		currentVolume: 1,
		lastVolumeValue: 1,
		progress: 0,
		videoDuration: 0,
		videoCurrentTime: "0:00",
	},
	ref: {
		videoRef: {current: {}},
		progressBarRef: {current: {}},
		containerRef: {current: {}},
		volumeRef: {current: {}},
	},
	options: {
		colors: {
			baseColor: "#0ea5e9",
		},
		controls: {
			forwardTime: 15,
		},
	},
	setRef: (data: any) =>
		set(() => ({
			ref: data,
		})),
	setOptions: (data: any) =>
		set(() => ({
			options: data,
		})),
	setVideoState: (stateData: Partial<VideoState>) =>
		set((state) => ({videoState: {...state.videoState, ...stateData}})),
}));
