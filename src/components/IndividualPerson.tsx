import React, { useEffect } from "react";
import useIndividualPerson from "../hooks/useIndividualPerson";
import { SolarSystemLoading } from "./SolarSystemLoading";
import { IndividualScreen } from "./IndividualScreen";

export const IndividualPerson = ({ item }: { item: any; }) => {
	const {
		films,
		starships,
		vehicles,
		species,
		infoLineArr,
		itemListArr,
	} = useIndividualPerson(item);
	useEffect(() => {
		if (films.data &&
			starships.data &&
			vehicles.data &&
			species.data) {
			if (window.scrollY !== 0) {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}
		}
	}, [
		films.data,
		starships.data,
		vehicles.data,
		species.data,
	]);
	return films.data &&
		starships.data &&
		vehicles.data &&
		species.data ? (
			<IndividualScreen
				itemListArr={itemListArr}
				infoLineArr={infoLineArr} />
		) : (
			<SolarSystemLoading />
		);
};
