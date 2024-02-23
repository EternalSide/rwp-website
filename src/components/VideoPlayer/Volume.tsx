import {useVolume} from "../../hooks/abstraction";
import {Volume2Icon, VolumeXIcon} from "lucide-react";
import {useState} from "react";

const Volume = () => {
	const [isHover, setIsHover] = useState(false);
	const {
		handleVolumeClick,
		handleVolumeDrag,
		handleMuteVolume,
		iconSize,
		volumeRef,
		currentVolume,
		isVolumeMuted,
		colors,
	} = useVolume();

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className='flex items-center justify-center'
		>
			<button onClick={handleMuteVolume}>
				{isVolumeMuted ? (
					<VolumeXIcon
						style={iconSize}
						fill='white'
					/>
				) : (
					<Volume2Icon
						style={iconSize}
						fill='white'
					/>
				)}
			</button>
			<div
				ref={volumeRef}
				onClick={handleVolumeClick}
				className={`relative w-[0px] flex items-center  invisible transition-all duration-150 opacity-0 ${
					isHover && "!opacity-100 !visible !w-[100px]  ml-3.5"
				}`}
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
