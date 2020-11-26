import { useGetItemList } from "../api-hooks/useGetItemList";
import { Screens } from "../enums";
import useItemListObj from "./useItemListObj";

const useIndividualPerson = (item: any) => {
	const { itemListObj } = useItemListObj();
	const films = useGetItemList(item.films);
	const starships = useGetItemList(item.starships);
	const vehicles = useGetItemList(item.vehicles);
	const species = useGetItemList(item.species);
	const itemListArr = [
		itemListObj(films, Screens.Films, "Films"),
		itemListObj(starships, Screens.Starships, "Starships"),
		itemListObj(vehicles, Screens.Vehicles, "Vehicles"),
		itemListObj(species, Screens.Species, "Species"),
	];
	const infoLineArr = [
		["Height", `${item.height}cm`],
		["Weight", `${item.mass}kg`],
		["Hair color", item.hair_color],
		["Eye color", item.eye_color],
		["Birth year", item.birth_year],
		["Gender", item.gender],
	];
	return {
		films,
		starships,
		vehicles,
		species,
		infoLineArr,
		itemListArr,
	};
};

export default useIndividualPerson;
