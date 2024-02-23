import Image from "next/image";

const Header = () => {
	return (
		<header className='min-h-[55px] flex items-center border-b max-[1300px]:px-8'>
			<div className='max-w-[1200px] mx-auto w-full flex justify-between items-center'>
				<div className='flex items-center gap-0.5'>
					<div className='h-[40px] w-[40px] relative'>
						<Image
							fill
							src='/logo.png'
							alt='react logo'
						/>
					</div>
					<h3 className='font-bold text-xl'>React Web Player</h3>
				</div>
				<div className='flex items-center gap-6'>
					<a
						href='https://github.com/EternalSide/rwp-website'
						target='_blank'
					>
						<p className='text-neutral-400 hover:text-sky-500 transition'>
							Github
						</p>
					</a>
				</div>
			</div>
		</header>
	);
};
export default Header;
