import {Check, ChevronsUp} from "lucide-react";
import {useRef, useState} from "react";
import {useClickOutside} from "@/utils/";
import {useSpeed} from "@/hooks/abstraction";

const VideoSpeed = () => {
	const [activeSpeedValue, setActiveSpeedValue] = useState(1);
	const speedValues = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
	const speedContainerRef = useRef<HTMLDivElement>(null);
	const [isSpeedOpen, setSpeedIsOpen] = useState(false);
	const {handleChangeSpeed} = useSpeed();

	useClickOutside({
		containerRef: speedContainerRef,
		dependencies: [speedContainerRef],
		setIsOpen: setSpeedIsOpen,
	});

	const onClick = (speedValue: number) => {
		handleChangeSpeed(speedValue);
		setActiveSpeedValue(speedValue);
		setSpeedIsOpen(false);
	};

	return (
		<div
			ref={speedContainerRef}
			className='relative flex items-center'
		>
			<button onClick={() => setSpeedIsOpen(!isSpeedOpen)}>
				<ChevronsUp className='player__icon' />
			</button>

			{isSpeedOpen && (
				<div className='bg-black/80 border border-border  absolute bottom-[52px] z-[50] right-0 rounded-lg min-w-[350px]'>
					<p className='border-b border-border px-6 py-2.5 text-neutral-200'>
						Скорость воспроизведения
					</p>
					<ul className='flex flex-col'>
						{speedValues.map((speedValue: number) => {
							const isActive = speedValue === activeSpeedValue;
							return (
								<li
									key={speedValue}
									onClick={() => onClick(speedValue)}
									className={`py-2.5 px-6 hover:bg-neutral-800 transition cursor-pointer flex gap-2.5 items-center, ${
										isActive && "bg-neutral-800"
									} ${!isActive && "pl-[52px]"}`}
								>
									{isActive && <Check className='h-4 w-4 text-neutral-300' />}
									{speedValue}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};
export default VideoSpeed;
