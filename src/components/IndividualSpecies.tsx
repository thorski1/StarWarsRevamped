import React, { useEffect } from "react";
import useIndividualSpecies from "../hooks/useIndividualSpecies";
import { SolarSystemLoading } from "./SolarSystemLoading";
import { IndividualScreen } from "./IndividualScreen";

export const IndividualSpecies = ({ item }: { item: any; }) => {
	const {
		films,
		characters,
		homeworld,
		itemListArr,
		infoLineArr,
	} = useIndividualSpecies(item);
	useEffect(() => {
		if (films.data && characters.data && homeworld.data) {
			if (window.scrollY !== 0) {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}
		}
	}, [films.data, characters.data, homeworld.data]);
	return films.data && characters.data && homeworld.data ? (
		<IndividualScreen
			itemListArr={itemListArr}
			infoLineArr={infoLineArr} />
	) : (
			<SolarSystemLoading />
		);
};
