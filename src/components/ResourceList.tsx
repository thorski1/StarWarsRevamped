import React, { useContext } from "react";
import { ScreenContext } from "../App";
import { Screens } from '../enums';
import { capitalizeWord } from "../utils/capitalizeWord";

export const ResourceList = () => {
	const {
		setScreenState,
		screenState,
		setPageNumber,
		url,
		urlList,
		setUrlList,
		screenList,
		setScreenList,
		itemType,
		itemTypeList,
		setItemTypeList,
	} = useContext(ScreenContext);
	const resourceArr: Screens[] = [
		Screens.Films,
		Screens.People,
		Screens.Planets,
		Screens.Species,
		Screens.Starships,
		Screens.Vehicles,
	];
	return (
		<div className="left-tab-container">
			{resourceArr.map((resource) => (
				<div
					className={`tab-container ${resource === screenState && "selected-tab"}`}
					onClick={() => {
						setItemTypeList([...itemTypeList, itemType]);
						setUrlList([...urlList, url]);
						setScreenList([...screenList, screenState]);
						setScreenState(resource);
						setPageNumber(1);
					}}
				>
					<h2
						className={`tab-text ${resource === screenState &&
							"selected-tab-text"}`}
					>
						{capitalizeWord(resource)}
					</h2>
				</div>
			))}
		</div>
	);
};
