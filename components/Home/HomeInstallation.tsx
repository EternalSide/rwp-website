import CodeExample from "../shared/CodeExample";

const HomeInstallation = () => {
	return (
		<>
			<div className='pb-3 border-b'>
				<h3 className='text-3xl font-medium'>Установка</h3>
			</div>
			<div className='mt-4'>
				<CodeExample />
			</div>
			<div className='mt-6'>
				<div className='pb-3 border-b'>
					<p className='text-2xl font-medium'>Импорт</p>
				</div>
				<div className='mt-4'>
					<div className='p-5 rounded-md border border-input bg-zinc-900 min-h-[25px] '>
						<p>
							<span className='text-sky-500'> import</span>
							{" { VideoPlayer }"} from{" "}
							<span className='text-sky-500'>'react-web-player'</span>
						</p>
						<div className='mt-6'>{`<VideoPlayer url={url} />`}</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomeInstallation;
