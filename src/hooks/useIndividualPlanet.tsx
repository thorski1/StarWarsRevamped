import React from "react";
import { useGetItemList } from "../api-hooks/useGetItemList";
import { Screens } from "../enums";
import useItemListObj from "./useItemListObj";

const useIndividualPlanet = (item: any) => {
    const { itemListObj } = useItemListObj();
	const films = useGetItemList(item.films);
	const residents = useGetItemList(item.residents);
	const itemListArr = [
		itemListObj(films, Screens.Films, "Films"),
		itemListObj(residents, Screens.People, "Residents"),
	];
	const infoLineArr = [
		["Rotation Period", item.rotation_period],
		["Orbital Period", item.orbital_period],
		["Diameter", item.diameter],
		["Climate", item.climate],
		["Gravity", item.gravity],
		["Terrain", item.terrain],
		["Surface Water", item.surface_water],
		["Population", item.population],
    ];
    return {infoLineArr, itemListArr, films, residents}
};

export default useIndividualPlanet;
