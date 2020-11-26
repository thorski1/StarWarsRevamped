import React, { useEffect } from "react";
import useIndividualVehicle from "../hooks/useIndividualVehicle";
import { SolarSystemLoading } from "./SolarSystemLoading";
import { IndividualScreen } from "./IndividualScreen";

export const IndividualVehicle = ({ item }: { item: any; }) => {
	const {
		films,
		pilots,
		itemListArr,
		infoLineArr,
	} = useIndividualVehicle(item);
	useEffect(() => {
		if (films.data && pilots.data) {
			if (window.scrollY !== 0) {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}
		}
	}, [films.data, pilots.data]);
	return films.data && pilots.data ? (
		<IndividualScreen
			itemListArr={itemListArr}
			infoLineArr={infoLineArr} />
	) : (
			<SolarSystemLoading />
		);
};
