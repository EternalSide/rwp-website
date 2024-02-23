import {usePlayer} from "@/src/index";
import {useShallow} from "zustand/react/shallow";

const OptionControl = ({value, valueName, color}: any) => {
	return (
		<p>
			<span
				style={{
					color,
				}}
			>
				player.
			</span>
			{valueName}:{" "}
			<span className='text-sky-500'>
				{valueName === "progress" ? String(value).slice(0, 4) : String(value)}
			</span>
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
				Контроль из любого места.
			</p>
			<p>
				const
				<span
					style={{
						color: options.colors?.baseColor,
					}}
				>
					{" "}
					player
				</span>{" "}
				= <span className='text-sky-500'>usePlayer()</span>
			</p>
			<p className='text-sm text-zinc-400 mt-3 mb-1.5 text-left'>
				Никаких лишних ререндеров.
			</p>
			<div className='flex flex-col gap-3 items-start'>
				{booleanData.map((item: (typeof booleanData)[0]) => (
					<OptionControl
						key={item.valueName}
						value={item.value}
						valueName={item.valueName}
						color={options.colors?.baseColor}
					/>
				))}
			</div>
		</div>
	);
};
export default HomePlayerSettings;
