const Footer = () => {
	return (
		<footer className='container !px-0 min-h-[64px] flex justify-center items-center'>
			<p className='text-zinc-400 font-medium text-sm'>
				made by{" "}
				<a
					href='https://t.me/AAT_L'
					target='_blank'
				>
					<span className='text-sky-500'>EternalSide </span>
				</a>
				with global store{" "}
				<a
					href='https://github.com/pmndrs/zustand'
					target='_blank'
				>
					<span className='text-sky-500'>zustand ~</span>
				</a>
			</p>
		</footer>
	);
};
export default Footer;
