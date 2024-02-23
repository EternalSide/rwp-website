"use client";
import {useState} from "react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";

const HomeInput = ({setUrl}: any) => {
	const [value, setValue] = useState(
		"https://files.edgestore.dev/s863vgoz59ii0hbb/videos/_public/e900eb9b-4e3f-4b66-a985-b9f71c4e5eb9.mp4"
	);
	return (
		<div className='flex'>
			<Input
				className='p-2 bg-zinc-900 rounded-[10px] flex items-center w-full rounded-r-none '
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button
				onClick={() => setUrl(value)}
				className='text-white bg-sky-500 border-l-none rounded-l-none hover:bg-sky-600'
			>
				Обновить
			</Button>
		</div>
	);
};
export default HomeInput;
