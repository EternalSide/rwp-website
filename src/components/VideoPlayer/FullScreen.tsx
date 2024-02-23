import {Maximize} from "lucide-react";
import {useFullScreen} from "../../hooks/abstraction";

const FullScreen = () => {
	const {toggleFullscreen, iconSize} = useFullScreen();

	return (
		<button onClick={toggleFullscreen}>
			<Maximize style={iconSize} />
		</button>
	);
};
export default FullScreen;
