import VideoPause from "./VideoPause";
import VideoSpeed from "./VideoSpeed";
import Volume from "./Volume";
import VideoProgressBar from "./VideoProgressBar";
import VideoTime from "./VideoTime";
import ChangeTime from "./ChangeTime";
import FullScreen from "./FullScreen";
import {usePlayer} from "../../index";
import {useShallow} from "zustand/react/shallow";

interface Props {
	isHover: boolean;
	videoUrl: string;
	progressBarRef: React.RefObject<HTMLDivElement>;
}

const VideoControls = ({videoUrl, isHover, progressBarRef}: Props) => {
	const {controls} = usePlayer(
		useShallow((state) => ({
			controls: state.options.size?.controls,
		}))
	);

	return (
		<div
			ref={progressBarRef}
			style={{
				height: controls?.height !== undefined ? controls.height : "56px",
			}}
			className={`absolute bg-black/50 bottom-0 left-0 w-full z-10 invisible opacity-0 transition-all duration-150 ${
				isHover && "!opacity-100 !visible"
			}`}
		>
			<VideoProgressBar videoUrl={videoUrl} />
			<div
				style={{
					boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
				}}
				className='flex px-4 justify-between  h-full'
			>
				<div className='flex items-center gap-3.5'>
					<ChangeTime>
						<VideoPause />
					</ChangeTime>
					<Volume />
					<VideoTime />
				</div>
				<div className='flex items-center gap-6'>
					<VideoSpeed />
					<FullScreen />
				</div>
			</div>
		</div>
	);
};
export default VideoControls;
