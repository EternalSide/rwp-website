import {StepBack, StepForward} from "lucide-react";
import {useTime} from "@/hooks/abstraction";

const ChangeTime = ({children}: {children: React.ReactNode}) => {
	const {handleChangeTime} = useTime();

	return (
		<>
			<button onClick={() => handleChangeTime("back")}>
				<StepBack
					fill='white'
					className='player__icon'
				/>
			</button>
			{children}
			<button onClick={() => handleChangeTime("forward")}>
				<StepForward
					fill='white'
					className='player__icon'
				/>
			</button>
		</>
	);
};
export default ChangeTime;
