import React, { useContext } from "react";
import { Screens } from '../enums';
import { ScreenContext } from "../App";

export const SetItemList = ({
	itemList,
	category,
	title,
}: {
	itemList: any;
	category: Screens;
	title: string;
}) => {
	const {
		setUrl,
		setItemType,
		url,
		urlList,
		setUrlList,
		screenState,
		screenList,
		setScreenList,
		itemType,
		itemTypeList,
		setItemTypeList,
	} = useContext(ScreenContext);
	return itemList.data ? (
		itemList.data.length ? (
			<h3 className="list-item-title">
				{title}:{" "}
				{itemList.data.map((item: any, index: number) => (
					<>
						<span
							className="list-item"
							onClick={() => {
								setItemTypeList([
									...itemTypeList,
									itemType,
								]);
								setScreenList([...screenList, screenState]);
								setUrlList([...urlList, url]);
								setItemType(category);
								setUrl(item.url);
							}}
							key={category === Screens.Films
								? item.title
								: item.name}
						>
							{category === Screens.Films
								? item.title
								: item.name}
						</span>
						<span className="list-item-comma">
							{index === itemList.data!.length - 1
								? ""
								: ", "}
						</span>
					</>
				))}
			</h3>
		) : null
	) : itemList.isLoading ? null : null; // <SolarSystemLoading />
};
