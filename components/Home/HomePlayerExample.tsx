"use client";
import {VideoPlayer} from "react-web-player";
import {useState} from "react";
import HomePlayerSettings from "./HomePlayerSettings";
import HomeInput from "./HomeInput";

const HomePlayerExample = () => {
	const [url, setUrl] = useState(
		"https://files.edgestore.dev/s863vgoz59ii0hbb/videos/_public/c3d23bfb-c56b-4924-8e23-ddf69e89bf1d.mp4"
	);

	return (
		<div className='mt-6 '>
			<div className='pb-3 border-b mb-4'>
				<p className='text-2xl font-medium'>Плеер</p>
			</div>
			<p className='mb-1 text-sky-500'>videoUrl:</p>
			<HomeInput setUrl={setUrl} />
			<div className='flex items-start h-[478px] mt-3 gap-0 border rounded-xl overflow-hidden max-[1200px]:flex-col max-[1200px]:h-[1200px]'>
				<VideoPlayer
					className='h-full'
					url={url}
				/>
				<HomePlayerSettings />
			</div>
		</div>
	);
};
export default HomePlayerExample;
