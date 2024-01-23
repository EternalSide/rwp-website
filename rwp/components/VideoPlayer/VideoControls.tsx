import VideoPause from "./VideoPause";
import VideoSpeed from "./VideoSpeed";
import Volume from "./Volume";
import VideoProgressBar from "./VideoProgressBar";
import VideoTime from "./VideoTime";
import ChangeTime from "./ChangeTime";
import FullScreen from "./FullScreen";

interface Props {
	isHover: boolean;
	videoUrl: string;
	progressBarRef: React.RefObject<HTMLDivElement>;
}

const VideoControls = ({videoUrl, isHover, progressBarRef}: Props) => {
	return (
		<div
			ref={progressBarRef}
			className={`h-[56px] absolute bottom-0 left-0 w-full z-[2500] invisible opacity-0 transition-all duration-100 ${
				isHover && "!opacity-100 !visible"
			}`}
		>
			<VideoProgressBar videoUrl={videoUrl} />
			<div className='flex px-4 justify-between items-center h-full'>
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
