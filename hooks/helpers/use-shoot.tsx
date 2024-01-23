import {useRef, useState} from "react";

// Хук делает снимок превью кадра
interface UseShootProps {
	setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
	progressBarRef: React.RefObject<HTMLDivElement>;
	videoDuration: number;
}

const useShoot = ({
	setIsHover,
	progressBarRef,
	videoDuration,
}: UseShootProps) => {
	const [style, setStyle] = useState(0);
	const [snapshots, setSnapshots] = useState("");
	const [hoveredSecond, setHoveredSecond] = useState("0:00");
	const secondVideoRef = useRef<HTMLVideoElement>(null);

	const onSliderHover = (event: React.MouseEvent<HTMLDivElement>) => {
		setSnapshots("");
		if (!progressBarRef.current) return;
		const progressBarWidth = progressBarRef.current.offsetWidth;

		const clickX =
			event.clientX - progressBarRef.current.getBoundingClientRect().left;

		const clickProcent = (clickX / progressBarWidth) * 100;

		if (clickProcent < 10) {
			setStyle(10);
		} else if (clickProcent > 90) {
			setStyle(90);
		} else {
			setStyle(clickProcent);
		}

		setIsHover(true);

		// Процент выполнения в секундах (заменить на уни функцию)
		const secondsInProcents = (clickProcent / 100) * videoDuration;
		const minutes = Math.floor(secondsInProcents / 60);
		const seconds = Math.floor(secondsInProcents % 60);
		const formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
		setHoveredSecond(formattedTime);

		// shoot baby
		if (secondVideoRef?.current) {
			secondVideoRef.current.currentTime = secondsInProcents;
			shoot(secondVideoRef.current);
		}
	};

	const shoot = (video: HTMLVideoElement) => {
		let canvas = capture(video);
		if (
			canvas.getAttribute("width") === "0" ||
			canvas.getAttribute("height") === "0"
		) {
			return setSnapshots("");
		}
		setSnapshots(canvas.toDataURL());
	};

	// lets capture dat shit
	const capture = (video: HTMLVideoElement) => {
		let canvas = document.createElement("canvas");
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		let ctx = canvas.getContext("2d");
		ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
		return canvas;
	};

	const onOutsideSlider = () => {
		setSnapshots("");
		setIsHover(false);
	};

	return {
		onSliderHover,
		onOutsideSlider,
		style,
		snapshots,
		hoveredSecond,
		secondVideoRef,
	};
};
export default useShoot;
