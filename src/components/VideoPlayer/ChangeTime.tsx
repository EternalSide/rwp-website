import {StepBack, StepForward} from "lucide-react";
import {useTime} from "../../hooks/abstraction";

const ChangeTime = ({children}: {children: React.ReactNode}) => {
	const {handleChangeTime, iconSize} = useTime();

	return (
		<>
			<button onClick={() => handleChangeTime("back")}>
				<StepBack
					style={iconSize}
					fill='white'
				/>
			</button>
			{children}
			<button onClick={() => handleChangeTime("forward")}>
				<StepForward
					style={iconSize}
					fill='white'
				/>
			</button>
		</>
	);
};
export default ChangeTime;
