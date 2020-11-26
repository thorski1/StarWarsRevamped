import { useQuery } from "react-query";

interface IResourceObj {
	films: string;
	people: string;
	planets: string;
	species: string;
	starships: string;
	vehicles: string;
}

export function useResourceList () {
	return useQuery<IResourceObj, Error>(
		"list-resources",
		() =>
			fetch(`https://swapi.dev/api/`).then((res) =>
				res.json()
			)
	);
}
