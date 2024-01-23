import Image from "next/image";
import {Button} from "../ui/button";

const HomePromo = () => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<div className='h-[150px] w-[150px] relative'>
				<Image
					fill
					src='/logo.png'
					alt='react logo'
				/>
			</div>
			<h1 className='font-bold text-5xl'>React Web Player</h1>
			<p className='mt-4 '>
				Минимум ререндеров. Максимум гибкости и контроля. Веб Плеер для
				<span className='text-sky-500'> React.js!</span>
			</p>
			{/* <div className='flex items-center gap-3 mt-6'>
				<Button className='rounded-full bg-sky-500 text-white text-lg p-6 hover:bg-sky-600 min-w-[190px]'>
					Установка
				</Button>
				<Button className='rounded-full bg-transparent min-w-[190px] border text-white text-lg p-6 hover:bg-transparent hover:opacity-90'>
					API Управление
				</Button>
			</div> */}
		</div>
	);
};
export default HomePromo;
