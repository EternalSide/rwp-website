import {useEffect} from "react";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const secondsToMinutes = (seconds: any) => {
	var minutes = Math.floor(seconds / 60);
	var remainingSeconds = Math.round(seconds % 60);
	var formattedTime =
		minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
	return formattedTime;
};

export const getSecondsFromWidth = (
	e: any,
	ref: any,
	videoDuration: any
): number => {
	const refWidth = ref.current.offsetWidth;
	const clickX = e.clientX - ref.current.getBoundingClientRect().left;
	const progressPercentage = (clickX / refWidth) * 100;
	const seconds = (progressPercentage / 100) * videoDuration;

	return seconds;
};

// Процент выполнения в секундах
export const formatVideoTime = (e: any) => {
	let currentTimeInSeconds;

	if (e?.target?.currentTime) {
		currentTimeInSeconds = e.target.currentTime;
	} else {
		currentTimeInSeconds = e;
	}
	const minutes = Math.floor(currentTimeInSeconds / 60);
	const seconds = Math.floor(currentTimeInSeconds % 60);
	const formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

	return formattedTime;
};

// Клик вне контейнера.
interface HookProps<T> {
	containerRef: React.RefObject<T>;
	setIsOpen: any;
	dependencies: any[];
	functionInCondition?: (...args: any[]) => any;
	functionAfterCondition?: (...args: any[]) => any;
}

export function useClickOutside<T>({
	containerRef,
	setIsOpen,
	dependencies,
	functionInCondition,
	functionAfterCondition,
}: HookProps<T>) {
	if (!Array.isArray(dependencies)) {
		throw new Error("dependencies должен быть массивом.");
	}

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (!containerRef?.current) return;
			if (
				containerRef?.current instanceof Element &&
				!containerRef?.current.contains(e.target as Node)
			) {
				setIsOpen(false);
				if (functionInCondition) {
					functionInCondition();
				}
			}
		};
		if (functionAfterCondition) {
			functionAfterCondition();
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);
	}, dependencies);
}
