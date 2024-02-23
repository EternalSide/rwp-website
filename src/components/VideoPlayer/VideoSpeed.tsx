import {Check, ChevronsUp} from "lucide-react";
import {useClickOutside} from "../../utils";
import {useSpeed} from "../../hooks/abstraction";

const VideoSpeed = () => {
	const {
		speedValues,
		speedContainerRef,
		activeSpeedValue,
		isSpeedContainerOpen,
		handleChangeSpeed,
		setSpeedIsOpen,
		baseColor,
		iconSize,
	} = useSpeed();

	useClickOutside({
		containerRef: speedContainerRef,
		dependencies: [speedContainerRef],
		setIsOpen: setSpeedIsOpen,
	});

	const defineStyle = (isActive: boolean) => {
		if (isActive) {
			return {
				backgroundColor: baseColor ? baseColor : "#0284c7",
			};
		}
	};

	return (
		<div
			ref={speedContainerRef}
			className='relative flex items-center'
		>
			<button onClick={() => setSpeedIsOpen(!isSpeedContainerOpen)}>
				<ChevronsUp style={iconSize} />
			</button>

			{isSpeedContainerOpen && (
				<div className='bg-black/80 border border-neutral-800  absolute bottom-[52px] z-[50] right-0 rounded-lg min-w-[300px]'>
					<p className='border-b border-neutral-800 px-6 py-2.5 text-neutral-200'>
						Скорость воспроизведения
					</p>
					<ul className='flex flex-col'>
						{speedValues.map((speedValue: number) => {
							const isActive = speedValue === activeSpeedValue;
							return (
								<li
									key={speedValue}
									onClick={() => handleChangeSpeed(speedValue)}
									style={defineStyle(isActive)}
									className={`py-2.5 px-6 ${
										baseColor ? `hover:bg-[${baseColor}]` : "hover:bg-sky-600"
									} transition cursor-pointer flex gap-2.5 items-center, ${
										!isActive && "pl-[52px]"
									}`}
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
