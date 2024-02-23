import CodeExample from "../shared/CodeExample";

const HomeInstallation = () => {
	return (
		<>
			<div className='pb-3 border-b'>
				<h3 className='text-2xl font-medium'>Установка</h3>
			</div>

			<CodeExample />

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
						<div className=''>{`<VideoPlayer url={url} />`}</div>
					</div>
				</div>
				<div className='mt-6'>
					<div className='pb-3 border-b'>
						<p className='text-2xl font-medium'>TailwindCSS</p>
					</div>
					<p className='mt-4'>
						По умолчанию проигрыватель использует TailwindCSS, поэтому вам нужно
						добавить в tailwind.config.ts content[] строку.
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
