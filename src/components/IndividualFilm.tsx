import React, { useEffect } from "react";
import useIndividualFilm from "../hooks/useIndividualFilm";
import { SolarSystemLoading } from "./SolarSystemLoading";
import { IndividualScreen } from "./IndividualScreen";

export const IndividualFilm = ({ item }: { item: any; }) => {
	const {
		planets,
		starships,
		vehicles,
		species,
		characters,
		infoLineArr,
		itemListArr,
	} = useIndividualFilm(item);

	useEffect(() => {
		if (planets.data &&
			starships.data &&
			vehicles.data &&
			species.data &&
			characters.data) {
			if (window.scrollY !== 0) {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}
		}
	}, [
		planets.data,
		starships.data,
		vehicles.data,
		species.data,
		characters.data,
	]);
	return planets.data &&
		starships.data &&
		vehicles.data &&
		species.data &&
		characters.data ? (
			<IndividualScreen
				itemListArr={itemListArr}
				infoLineArr={infoLineArr}
				openingCrawl={item.opening_crawl} />
		) : (
			<SolarSystemLoading />
		);
};
