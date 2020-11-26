import React from "react";
import { useGetIndividualItem } from "../api-hooks/useGetIndividualItem";
import { useGetItemList } from "../api-hooks/useGetItemList";
import { Screens } from "../enums";
import useItemListObj from "./useItemListObj";

const useIndividualSpecies = (item: any) => {
	const { itemListObj } = useItemListObj();
	const films = useGetItemList(item.films);
	const characters = useGetItemList(item.people);
	const homeworld = useGetIndividualItem(item.homeworld);
	const itemListArr = [
		itemListObj(films, Screens.Films, "Films"),
		itemListObj(characters, Screens.People, "Characters"),
	];
	const infoLineArr = [
		["Classification", item.classification],
		["Designation", item.designation],
		["Average height", item.average_height],
		["Skin colors", item.skin_colors],
		["Hair colors", item.hair_colors],
		["Eye colors", item.eye_colors],
		["Average lifespan", item.average_lifespan],
		[
			"Homeworld",
			homeworld.data ? homeworld.data.name : "",
		],
		["Language", item.language],
    ];
    return {films, characters, homeworld, itemListArr, infoLineArr}
};

export default useIndividualSpecies;
