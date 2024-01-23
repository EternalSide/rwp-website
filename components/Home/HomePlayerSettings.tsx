import {usePlayer} from "react-web-player";
import {useShallow} from "zustand/react/shallow";

const OptionControl = ({value, valueName}: any) => {
	return (
		<p>
			{valueName}: <span className='text-sky-500'>{String(value)}</span>
		</p>
	);
};

const HomePlayerSettings = () => {
	const {videoState, options} = usePlayer(
		useShallow((state) => ({
			videoState: state.videoState,
			options: state.options,
		}))
	);

	const {
		isPaused,
		isBuffering,
		isVolumeMuted,
		currentVolume,
		lastVolumeValue,
		videoCurrentTime,
		videoDuration,
		progress,
		isFullscreen,
	} = videoState;

	const {colors} = options;

	const booleanData = [
		{
			value: isPaused,
			valueName: "isPaused",
		},
		{
			value: isBuffering,
			valueName: "isBuffering",
		},
		{
			value: isFullscreen,
			valueName: "isFullscreen",
		},
		{
			value: isVolumeMuted,
			valueName: "isVolumeMuted",
		},
		{
			value: currentVolume,
			valueName: "currentVolume",
		},
		{
			value: lastVolumeValue,
			valueName: "lastVolumeValue",
		},
		{
			value: videoCurrentTime,
			valueName: "videoCurrentTime",
		},
		{
			value: videoDuration,
			valueName: "videoDuration",
		},
		{
			value: progress,
			valueName: "progress",
		},
		{
			value: colors?.baseColor,
			valueName: "baseColor",
		},
	];

	return (
		<div className='bg-background p-5 w-[350px]'>
			<p className='text-sm text-zinc-400  mb-1.5 text-left'>
				Управление плеером из любого места.
			</p>
			<p>
				const player = <span className='text-sky-500'>usePlayer()</span>
			</p>
			<p className='text-sm text-zinc-400 mt-3 mb-1.5 text-left'>
				Рендер только там, где нужно.
			</p>
			<div className='flex flex-col gap-3 items-start'>
				{booleanData.map((item: (typeof booleanData)[0]) => (
					<OptionControl
						key={item.valueName}
						value={item.value}
						valueName={item.valueName}
					/>
				))}
			</div>
		</div>
	);
};
export default HomePlayerSettings;
