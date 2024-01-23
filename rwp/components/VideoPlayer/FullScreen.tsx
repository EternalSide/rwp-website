import {Maximize} from "lucide-react";
import {useFullScreen} from "@/hooks/abstraction";

const FullScreen = () => {
	const {toggleFullscreen} = useFullScreen();

	return (
		<button onClick={toggleFullscreen}>
			<Maximize className='player__icon' />
		</button>
	);
};
export default FullScreen;
