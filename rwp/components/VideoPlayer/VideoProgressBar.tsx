import useProgress from "@/hooks/abstraction/use-progress";
import useShoot from "@/hooks/helpers/use-shoot";
import {cn} from "@/lib/utils";
import {Loader2Icon} from "lucide-react";
import {useState} from "react";

interface Props {
	videoUrl?: string | undefined;
}

const VideoProgressBar = ({videoUrl}: Props) => {
	const {
		handleProgressBarDragStart,
		handleProgressBarClick,
		progressBarRef,
		progress,
		colors,
		videoDuration,
	} = useProgress();

	const [isHover, setIsHover] = useState(false);
	const {
		onSliderHover,
		onOutsideSlider,
		style,
		snapshots,
		hoveredSecond,
		secondVideoRef,
	} = useShoot({
		setIsHover,
		progressBarRef: progressBarRef!,
		videoDuration,
	});

	const defineProgress = () => (progress < 0.6 ? `${0.6}%` : `${progress}%`);

	return (
		<div
			className='relative'
			onMouseMove={onSliderHover}
			onMouseOut={onOutsideSlider}
			onMouseDown={handleProgressBarDragStart}
			onClick={handleProgressBarClick}
		>
			<div
				onMouseEnter={() => setIsHover(false)}
				style={{
					left: `${style}%`,
					transform: "translateX(-50%)",
				}}
				className={`invisible absolute bottom-[55px] w-64 h-40 ${
					isHover && "!visible"
				}`}
			>
				{videoUrl && snapshots && snapshots?.length > 1 ? (
					<img
						src={snapshots}
						style={{
							borderColor: colors?.baseColor ? colors.baseColor : "#0ea5e9",
						}}
						className={cn("w-full h-full border  rounded-lg")}
					/>
				) : (
					<div className='w-full h-full border border-sky-500 rounded-lg bg-black flex justify-center items-center'>
						<Loader2Icon className='relative mx-auto  h-10 w-10 animate-spin text-sky-500' />
					</div>
				)}

				<p className='text-center mt-3'>{hoveredSecond}</p>
			</div>
			<button
				style={{
					width: `${progress}%`,
					backgroundColor: colors?.baseColor ? colors.baseColor : "#0ea5e9",
				}}
				className={cn(
					"h-[5px] rounded-md z-50 bg-sky-500 border-none outline-none absolute top-0"
				)}
			/>
			<button
				style={{
					width: `100%`,
				}}
				className='h-[5px] absolute bg-neutral-500 rounded-md border-none outline-none'
			/>
			<div
				onMouseDown={handleProgressBarDragStart}
				style={{
					left: defineProgress(),
					backgroundColor: colors?.baseColor ? colors.baseColor : "#0ea5e9",
				}}
				className={cn(
					"h-4 w-4 absolute -ml-[4px] -mt-1.5 rounded-full shadow cursor-pointer "
				)}
			/>
			{videoUrl && (
				<video
					src={videoUrl}
					ref={secondVideoRef}
					className='hidden'
					controls={false}
					width='800'
					autoPlay={false}
					muted={true}
					preload='auto'
					crossOrigin='anonymous'
				/>
			)}
		</div>
	);
};
export default VideoProgressBar;
