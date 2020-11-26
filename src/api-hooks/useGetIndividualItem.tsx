import { useQuery } from "react-query";

export function useGetIndividualItem(url: string) {
	return useQuery(url, () =>
		fetch(url).then((res) => res.json())
	);
}
