import CodeExample from "../shared/CodeExample";

const HomeInstallation = () => {
	return (
		<>
			<div className='pb-3 border-b'>
				<h3 className='text-3xl font-medium'>Install</h3>
			</div>
			<div className='mt-4'>
				<CodeExample />
			</div>
			<div className='mt-6'>
				<div className='pb-3 border-b'>
					<p className='text-2xl font-medium'>Import</p>
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
				<div className='mt-6'>
					<div className='pb-3 border-b'>
						<p className='text-2xl font-medium'>TailwindCSS</p>
					</div>
					<p className='mt-4'>
						By default player using TailwindCSS styling so u need to add this
						into your tailwind.config.ts object, into content: []
					</p>
					<div className='mt-4 p-5 rounded-md border border-input bg-zinc-900 min-h-[25px] '>
						<p>
							<span>
								{`./node_modules/react-web-player/dist/esm/**/*.{(js, ts, tsx)}`}
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomeInstallation;
