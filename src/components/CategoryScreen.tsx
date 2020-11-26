import React, { useContext, useEffect } from "react";
import { useCategoryFetch } from "../api-hooks/useCategoryFetch";
import { Screens } from '../enums';
import { capitalizeWord } from "../utils/capitalizeWord";
import { SolarSystemLoading } from "./SolarSystemLoading";
import { PaginationButton } from "./PaginationButton";
import { ScreenContext } from '../App'

export const CategoryScreen = () => {
	const {
		screenState,
		setScreenState,
		setUrl,
		setItemType,
		pageNumber,
		setPageNumber,
		setTitle,
		screenList,
		setScreenList,
		urlList,
		url,
		setUrlList,
		itemType,
		itemTypeList,
		setItemTypeList,
	} = useContext(ScreenContext);

	const { data, isLoading } = useCategoryFetch(
		screenState,
		pageNumber
	);

	useEffect(() => {
		setTitle(capitalizeWord(screenState));
	}, [screenState, setTitle]);

	useEffect(() => {
		if (data) {
			if (window.scrollY !== 0) {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}
		}
	}, [data]);

	const individualItemName = (item: any) => screenState === Screens.Films ? item.title : item.name;

	return data ? (
		<>
			{data.results.map((item: any) => (
				<div
					className="individual-item"
					key={individualItemName(item)}
					onClick={() => {
						setItemTypeList([...itemTypeList, itemType]);
						setScreenList([...screenList, screenState]);
						setUrlList([...urlList, url]);
						setScreenState(Screens.IndividualItem);
						setUrl(item.url);
						setItemType(screenState);
					}}
				>
					<h3 className="item-text">
						{individualItemName(item)}
					</h3>
				</div>
			))}
			{data.next || data.previous ? (
				<div className="pagination-button-containers">
					{data.previous && (
						<PaginationButton
							clickHandler={() => {
								setItemTypeList([
									...itemTypeList,
									itemType,
								]);
								setScreenList([...screenList, screenState]);
								setUrlList([...urlList, url]);
								setPageNumber(pageNumber - 1);
							}}
							label="Previous" />
					)}
					{data.next && (
						<PaginationButton
							clickHandler={() => {
								setItemTypeList([
									...itemTypeList,
									itemType,
								]);
								setScreenList([...screenList, screenState]);
								setUrlList([...urlList, url]);
								setPageNumber(pageNumber + 1);
							}}
							label={"Next"} />
					)}
				</div>
			) : null}
		</>
	) : isLoading ? (
		<SolarSystemLoading />
	) : (
				<h1 className="category-title">
					Something went wrong!
				</h1>
			);
};
