import { Screens } from "../enums";

const useItemListObj = () => {
    const itemListObj = (
			itemList: any,
			category: Screens,
			title: string
		) => {
			return {
				itemList,
				category,
				title,
			};
    }; 
    return {itemListObj}
}

export default useItemListObj;