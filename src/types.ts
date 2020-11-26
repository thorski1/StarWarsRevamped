import { Screens } from './enums'

export interface IScreenContext {
	screenState: Screens;
	setScreenState: React.Dispatch<
		React.SetStateAction<Screens>
	>;
	url: string;
	setUrl: React.Dispatch<React.SetStateAction<string>>;
	itemType: Screens;
	setItemType: React.Dispatch<
		React.SetStateAction<Screens>
	>;
	pageNumber: number;
	setPageNumber: React.Dispatch<
		React.SetStateAction<number>
	>;
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	urlList: string[];
	setUrlList: React.Dispatch<
		React.SetStateAction<string[]>
	>;
	screenList: Screens[];
	setScreenList: React.Dispatch<
		React.SetStateAction<Screens[]>
	>;
	itemTypeList: Screens[];
	setItemTypeList: React.Dispatch<
		React.SetStateAction<Screens[]>
	>;
}

export interface ItemListObj {
	itemList: any;
	category: Screens;
	title: string;
}

export interface IIndividualScreenProps {
	itemListArr: {
		itemList: any;
		category: Screens;
		title: string;
	}[];
	infoLineArr: any[][];
	openingCrawl?: string;
}