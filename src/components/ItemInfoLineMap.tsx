import React from "react";
import { ItemInfoLine } from "./ItemInfoLine";

export const ItemInfoLineMap = ({
	infoLineArr,
}: {
	infoLineArr: string[][];
}) => {
	return (
		<>
			{infoLineArr.map((item) => (
				<ItemInfoLine
					label={item[0]}
					value={item[1]}
					key={item[1]} />
			))}
		</>
	);
};
