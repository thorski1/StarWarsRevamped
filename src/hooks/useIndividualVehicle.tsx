import { useGetItemList } from "../api-hooks/useGetItemList";
import { Screens } from "../enums";
import useItemListObj from "./useItemListObj";

const useIndividualVehicle = (item: any) => {
	const { itemListObj } = useItemListObj();
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
		["Vehicle class", item.vehicle_class],
	];
	return {
        films,
        pilots,
		itemListArr,
		infoLineArr,
	};
};

export default useIndividualVehicle;
