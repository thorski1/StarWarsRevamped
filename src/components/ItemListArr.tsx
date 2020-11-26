import React from "react";
import { SetItemList } from "./SetItemList";
import * as Types from '../types'

export const ItemListArr = ({
	itemListArr,
}: {
	itemListArr: Types.ItemListObj[];
}) => {
	return (
		<>
			{itemListArr.map((list) => (
				<SetItemList
					key={list.category}
					itemList={list.itemList}
					category={list.category}
					title={list.title} />
			))}
		</>
	);
};
