import {useVolume} from "@/hooks/abstraction";
import {usePlayer} from "@/hooks/usePlayer";
import {Volume2Icon, VolumeXIcon} from "lucide-react";
import {useState} from "react";
import {useShallow} from "zustand/react/shallow";

const Volume = () => {
	const [isHover, setIsHover] = useState(false);
	const {handleVolumeClick, handleVolumeDrag, handleMuteVolume} = useVolume();

	const {volumeRef, currentVolume, isVolumeMuted, colors} = usePlayer(
		useShallow((state) => ({
			volumeRef: state.ref.volumeRef,
			currentVolume: state.videoState.currentVolume,
			isVolumeMuted: state.videoState.isVolumeMuted,
			colors: state.options.colors,
		}))
	);

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className='flex items-center justify-center'
		>
			<button onClick={(e) => handleMuteVolume(e)}>
				{isVolumeMuted ? (
					<VolumeXIcon
						fill='white'
						className='volume-icon'
					/>
				) : (
					<Volume2Icon
						fill='white'
						className='volume-icon'
					/>
				)}
			</button>
			<div
				onClick={(e) => handleVolumeClick(e)}
				className={`relative w-[0px] flex items-center  invisible transition-all duration-150 opacity-0 ${
					isHover && "!opacity-100 !visible !w-[100px]  ml-3.5"
				}`}
				ref={volumeRef}
			>
				<button
					style={{
						width: `${(currentVolume as number) * 100}%`,
						backgroundColor: colors?.baseColor ? colors.baseColor : "#0ea5e9",
					}}
					onClick={(e) => e.preventDefault()}
					className='h-1 rounded-md z-[50] border-none outline-none'
				/>
				<button
					onMouseDown={handleVolumeDrag}
					style={{
						width: `100%`,
					}}
					onClick={(e) => e.preventDefault()}
					className='h-1 absolute bg-neutral-500 rounded-md border-none outline-none'
				/>
				<div
					onMouseDown={handleVolumeDrag}
					style={{
						left: `${(currentVolume as number) * 100}%`,
						backgroundColor: colors?.baseColor ? colors.baseColor : "#0ea5e9",
					}}
					className='h-5 w-5 absolute -ml-2 rounded-full shadow cursor-pointer'
				/>
			</div>
		</div>
	);
};
export default Volume;
