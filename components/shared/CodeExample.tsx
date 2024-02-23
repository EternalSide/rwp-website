interface Props {
	code?: string;
}

const CodeExample = ({code}: Props) => {
	return (
		<div className='mt-4 p-5 rounded-md border border-input bg-zinc-900 min-h-[25px] flex items-center'>
			<p>
				{" "}
				<span className='text-sky-500'>npm install </span> react-web-player
			</p>
		</div>
	);
};
export default CodeExample;
