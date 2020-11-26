import React, { useContext, useEffect } from "react";
import { useGetIndividualItem } from "../api-hooks/useGetIndividualItem";
import { Screens } from '../enums';
import { IndividualVehicle } from "./IndividualVehicle";
import { IndividualStarship } from "./IndividualStarship";
import { IndividualSpecies } from "./IndividualSpecies";
import { IndividualPlanet } from "./IndividualPlanet";
import { IndividualPerson } from "./IndividualPerson";
import { IndividualFilm } from "./IndividualFilm";
import { ScreenContext } from "../App";

export const IndividualItemScreen = () => {
	const { url, itemType, setTitle } = useContext(
		ScreenContext
	);
	const individualItem = useGetIndividualItem(url);

	useEffect(() => {
		if (individualItem.data) {
			setTitle(
				itemType !== Screens.Films
					? individualItem.data.name
					: individualItem.data.title
			);
		}
	}, [individualItem.data, setTitle, itemType]);

	return individualItem.isLoading ? null : (
		<>
			{itemType === Screens.Films && (
				<IndividualFilm item={individualItem.data} />
			)}
			{itemType === Screens.People && (
				<IndividualPerson item={individualItem.data} />
			)}
			{itemType === Screens.Planets && (
				<IndividualPlanet item={individualItem.data} />
			)}
			{itemType === Screens.Species && (
				<IndividualSpecies item={individualItem.data} />
			)}
			{itemType === Screens.Starships && (
				<IndividualStarship item={individualItem.data} />
			)}
			{itemType === Screens.Vehicles && (
				<IndividualVehicle item={individualItem.data} />
			)}
		</>
	);
};
