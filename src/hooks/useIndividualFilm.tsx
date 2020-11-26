import { useGetItemList } from "../api-hooks/useGetItemList";
import { Screens } from "../enums";
import useItemListObj from "./useItemListObj";

const useIndividualFilm = (item: any) => {
	const { itemListObj } = useItemListObj();
	const characters = useGetItemList(item.characters);
	const planets = useGetItemList(item.planets);
	const starships = useGetItemList(item.starships);
	const vehicles = useGetItemList(item.vehicles);
	const species = useGetItemList(item.species);
	const itemListArr = [
		itemListObj(characters, Screens.People, "Characters"),
		itemListObj(planets, Screens.Planets, "Planets"),
		itemListObj(starships, Screens.Starships, "Starships"),
		itemListObj(vehicles, Screens.Vehicles, "Vehicles"),
		itemListObj(species, Screens.Species, "Species"),
	];

	const infoLineArr = [
		["Director", item.director],
		["Producer", item.producer],
    ];
    return {planets, starships, vehicles, species, characters, infoLineArr, itemListArr}
};

export default useIndividualFilm