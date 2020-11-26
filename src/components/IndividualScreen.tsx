import React, { useContext } from "react";
import { Screens } from '../enums';
import * as Icon from "react-feather";
import { ItemListArr } from "./ItemListArr";
import { ItemInfoLineMap } from "./ItemInfoLineMap";
import * as Types from '../types'
import { ScreenContext } from "../App";

export const IndividualScreen = ({
	itemListArr,
	infoLineArr,
	openingCrawl,
}: Types.IIndividualScreenProps) => {
	const {
		screenList,
		setScreenList,
		urlList,
		setUrlList,
		itemTypeList,
		setItemTypeList,
		setScreenState,
		setUrl,
		setItemType,
	} = useContext(ScreenContext);
	return (
		<div>
			<Icon.ArrowLeftCircle
				size={48}
				color="#f7c133"
				cursor="pointer"
				className="back-button"
				onClick={() => {
					setScreenState(screenList[screenList.length - 1]);
					setUrl(urlList[urlList.length - 1]);
					setItemType(
						itemTypeList[itemTypeList.length - 1]
					);
					setScreenList(
						screenList.filter(
							(screen: Screens, index: number) => index !== screenList.length - 1
						)
					);
					setUrlList(
						urlList.filter(
							(item: string, index: number) => index !== urlList.length - 1
						)
					);
					setItemTypeList(
						itemTypeList.filter(
							(item: Screens, index: number) => index !== itemTypeList.length - 1
						)
					);
				}} />
			{openingCrawl && (
				<p className="opening-crawl">{openingCrawl}</p>
			)}
			<ItemInfoLineMap infoLineArr={infoLineArr} />
			<ItemListArr itemListArr={itemListArr} />
		</div>
	);
};
