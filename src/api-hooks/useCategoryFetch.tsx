
import { useQuery } from "react-query";

export function useCategoryFetch(category: string, pageNumber: number = 1) {
	return useQuery(`${category} page ${pageNumber}`, () =>
		fetch(
			`https://swapi.dev/api/${category}/?page=${pageNumber}`
        ).then((res) => res.json()), {
            enabled: pageNumber
        }
	);
}
