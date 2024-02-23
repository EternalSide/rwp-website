// Типы плеера
export type VideoState = {
	isPaused: boolean;
	isBuffering: boolean;
	isVolumeMuted: boolean;
	isFullscreen: boolean;
	isSpeedContainerOpen: boolean;
	currentVolume: number;
	lastVolumeValue: number;
	progress: number;
	activeSpeedValue: number;
	videoDuration: number;
	speedValues: number[];
	videoCurrentTime: string | number;
	videoUrl: string | undefined;
};

type RefType = {
	videoRef: React.RefObject<any>;
	progressBarRef: React.RefObject<any>;
	containerRef: React.RefObject<any>;
	volumeRef: React.RefObject<any>;
	speedContainerRef: React.RefObject<any>;
};

export type OptionsType = {
	colors?: {
		baseColor?: string;
		hideVideoPreviewBorder?: boolean;
	};
	controls?: {
		forwardTime?: number;
	};
	preview?: {
		hidePreview?: boolean;
	};
	size?: {
		iconSize?: {
			width: string;
			height: string;
		};
		controls?: {
			height: string;
		};
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
