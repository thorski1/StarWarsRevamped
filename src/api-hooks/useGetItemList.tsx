import { useQuery } from "react-query";

export function useGetItemList(urlArr: string[]) {
    return useQuery(urlArr, () => 
    Promise.all(urlArr.map(u=>fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.json()))),
        {enabled: urlArr}
    )
}