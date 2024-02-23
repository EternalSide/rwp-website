"use client";
import {VideoPlayer} from "@/src/index";
import {useEffect, useState} from "react";
import HomePlayerSettings from "./HomePlayerSettings";
import HomeInput from "./HomeInput";
import {PlayerOptions} from "@/player.options";
import HomePlayerColors from "./HomePlayerColors";

const HomePlayerExample = () => {
	const [url, setUrl] = useState(
		"https://files.edgestore.dev/s863vgoz59ii0hbb/videos/_public/c3d23bfb-c56b-4924-8e23-ddf69e89bf1d.mp4"
	);
	const [hydrate, setHydrate] = useState(false);

	useEffect(() => {
		setHydrate(true);
	}, []);
	if (!hydrate) return null;

	return (
		<div className='mt-6'>
			<div className='pb-3 border-b mb-4'>
				<p className='text-2xl font-medium'>Компонент VideoPlayer</p>
			</div>
			<p className='mb-1 text-sky-500'>videoUrl:</p>
			<HomeInput setUrl={setUrl} />
			<div className='flex items-start mt-4 h-[478px]  gap-0 border rounded-xl overflow-hidden max-[1200px]:flex-col max-[1200px]:h-[980px]'>
				<VideoPlayer
					className='max-[1300px]:h-[500px] max-[1300px]:w-full'
					url={url}
					autoPlay={false}
					options={PlayerOptions}
				/>

				<HomePlayerSettings />
			</div>{" "}
			<HomePlayerColors />
		</div>
	);
};
export default HomePlayerExample;
