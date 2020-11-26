import React, { createContext, useState } from "react";
import {
	QueryCache,
	ReactQueryCacheProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import "./App.css";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel";
import { Screens } from "./enums";
import * as Types from './types'

const queryCache = new QueryCache();

export const ScreenContext = createContext(
	{} as Types.IScreenContext
);

function App() {
	const [screenState, setScreenState] = useState(
		Screens.Films
	);
	const [title, setTitle] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [url, setUrl] = useState("");
	const [itemType, setItemType] = useState(Screens.Films);
	const [urlList, setUrlList] = useState<string[]>([]);
	const [screenList, setScreenList] = useState<Screens[]>(
		[]
	);
	const [itemTypeList, setItemTypeList] = useState<
		Screens[]
	>([]);
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<ScreenContext.Provider
				value={{
					screenState,
					setScreenState,
					url,
					setUrl,
					itemType,
					setItemType,
					pageNumber,
					setPageNumber,
					title,
					setTitle,
					urlList,
					setUrlList,
					screenList,
					setScreenList,
					itemTypeList,
					setItemTypeList,
				}}
			>
				<div className="App" id="scroller">
					<LeftPanel />
					<RightPanel />
				</div>
				<ReactQueryDevtools initialIsOpen />
			</ScreenContext.Provider>
		</ReactQueryCacheProvider>
	);
}





export default App;
