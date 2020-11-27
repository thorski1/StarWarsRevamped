import { useGetItemList } from '../api-hooks/useGetItemList';
import { Screens } from "../enums";
import useItemListObj from './useItemListObj';

const useIndividualStarship = (item: any) => {
    const {itemListObj} = useItemListObj()
    const films = useGetItemList(item.films);
		const pilots = useGetItemList(item.pilots);
		const itemListArr = [
			itemListObj(films, Screens.Films, "Films"),
			itemListObj(pilots, Screens.People, "Pilots"),
		];
		const infoLineArr = [
			["Model", item.model],
			["Manufacturer", item.manufacturer],
			["Cost in credits", item.cost_in_credits],
			["Length", item.length],
			[
				"Maximum atmosphering speed",
				item.max_atmosphering_speed,
			],
			["Crew", item.crew],
			["Passengers", item.passengers],
			["Cargo capacity", item.cargo_capacity],
			["Consumables", item.consumables],
			["Hyperdrive rating", item.hyperdrive_rating],
			["MGLT", item.MGLT],
			["Starship class", item.starship_class],
        ];
    return { films, pilots, itemListArr, infoLineArr };
}

export default useIndividualStarship;