import {usePlayer} from "@/hooks";
import {Loader2Icon, Play} from "lucide-react";
import {useShallow} from "zustand/react/shallow";
import {cn} from "@/lib/utils";
const VideoPauseBuffering = () => {
	const {isBuffering, isPaused, setVideoState, baseColor} = usePlayer(
		useShallow((state) => ({
			isBuffering: state.videoState.isBuffering,
			isPaused: state.videoState.isPaused,
			setVideoState: state.setVideoState,
			baseColor: state.options.colors?.baseColor,
		}))
	);

	return (
		<>
			{isPaused && (
				<button
					onClick={() => {
						setVideoState({isPaused: false});
					}}
					style={{
						backgroundColor: baseColor ? baseColor : "#0ea5e9",
					}}
					className={cn(
						"absolute left-2/4 invisible top-2/4 opacity-90  -translate-x-2/4 -translate-y-2/4 rounded-full h-20 w-20 flex justify-center items-center button-pause",
						isPaused && "!visible"
					)}
				>
					<Play
						fill='white'
						className='h-10 w-10 ml-2'
					/>
				</button>
			)}
			{isBuffering && (
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						fontWeight: "bold",
						opacity: 0.7,
					}}
				>
					<Loader2Icon
						style={{
							color: baseColor ? baseColor : "#0ea5e9",
						}}
						className='relative mx-auto  h-20 w-20 animate-spin '
					/>
				</div>
			)}
		</>
	);
};
export default VideoPauseBuffering;
