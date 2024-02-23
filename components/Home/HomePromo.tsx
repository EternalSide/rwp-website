import Image from "next/image";

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
		</div>
	);
};
export default HomePromo;
