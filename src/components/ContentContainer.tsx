import React, { useContext } from 'react'
import { ScreenContext } from '../App';
import { Screens } from '../enums';
import { CategoryScreen } from './CategoryScreen';
import { IndividualItemScreen } from './IndividualItemScreen';

export const ContentContainer = () => {
    const { screenState } = useContext(ScreenContext);
    return (
			<div
				className={
					screenState !== Screens.IndividualItem
						? "content-container"
						: "individual-item-content-container"
				}
			>
				{screenState !== Screens.IndividualItem ? (
					<CategoryScreen />
				) : screenState === Screens.IndividualItem ? (
					<IndividualItemScreen />
				) : null}
			</div>
		);
}