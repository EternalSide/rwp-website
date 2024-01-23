// Типы плеера
export type VideoState = {
	isPaused: boolean;
	isBuffering: boolean;
	isVolumeMuted: boolean;
	isFullscreen: boolean;
	currentVolume: number;
	lastVolumeValue: number;
	progress: number;
	videoDuration: number;
	videoCurrentTime: string | number;
};

type RefType = {
	videoRef: React.RefObject<any>;
	progressBarRef: React.RefObject<any>;
	containerRef: React.RefObject<any>;
	volumeRef: React.RefObject<any>;
};

export type OptionsType = {
	colors?: {
		progressBarColor?: string;
		loadingColor?: string;
		previewVideoImgColor?: string;
		volumeColor?: string;
		baseColor?: string;
	};
	sizes?: {
		icons?: string;
		gap?: string;
	};
	preview?: boolean;
	controls?: {
		forwardTime?: number;
	};
};

// zustand usePlayer()
export interface ZustandPlayerState {
	videoState: VideoState;
	ref: RefType;
	options: OptionsType;
	setVideoState: (stateData: Partial<VideoState>) => void;
	setRef: (data: RefType) => void;
	setOptions: (data: OptionsType) => void;
}
// VideoPlayer component
export interface VideoPlayerProps {
	url: string;
	options?: OptionsType;
}

// #fullscreen type fix
export {};

declare global {
	interface Document {
		mozCancelFullScreen?: () => Promise<void>;
		msExitFullscreen?: () => Promise<void>;
		webkitExitFullscreen?: () => Promise<void>;
		mozFullScreenElement?: Element;
		msFullscreenElement?: Element;
		webkitFullscreenElement?: Element;
	}

	interface HTMLElement {
		msRequestFullscreen?: () => Promise<void>;
		mozRequestFullscreen?: () => Promise<void>;
		webkitRequestFullscreen?: () => Promise<void>;
	}
}
