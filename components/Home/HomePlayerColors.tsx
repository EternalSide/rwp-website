"use client";
import {usePlayer} from "@/src";

import {HexColorPicker} from "react-colorful";

const HomePlayerColors = () => {
	const {setOptions} = usePlayer();
	return (
		<div className='my-4 '>
			<div className='pb-3 border-b mb-4'>
				<p className='text-2xl font-medium'>Опции:</p>
			</div>
			<div>
				<h2 className='text-xl font-medium mb-1'>Цвет</h2>
				<HexColorPicker
					color={"red"}
					onChange={(e) =>
						setOptions({
							colors: {
								baseColor: e,
							},
						})
					}
				/>
			</div>
		</div>
	);
};
export default HomePlayerColors;
