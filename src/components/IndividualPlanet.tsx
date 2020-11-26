import React, { useEffect } from "react";
import useIndividualPlanet from "../hooks/useIndividualPlanet";
import { SolarSystemLoading } from "./SolarSystemLoading";
import { IndividualScreen } from "./IndividualScreen";

export const IndividualPlanet = ({ item }: { item: any; }) => {
	const {
		infoLineArr,
		itemListArr,
		films,
		residents,
	} = useIndividualPlanet(item);

	useEffect(() => {
		if (films.data && residents.data) {
			if (window.scrollY !== 0) {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}
		}
	}, [films.data, residents.data]);
	return films.data && residents.data ? (
		<IndividualScreen
			itemListArr={itemListArr}
			infoLineArr={infoLineArr} />
	) : (
			<SolarSystemLoading />
		);
};
