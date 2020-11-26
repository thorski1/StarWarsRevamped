import React, { useContext } from 'react'
import { ScreenContext } from '../App';
import { CategoryScreenWrapper } from './CategoryScreenWrapper';
import { CategoryTitle } from './CategoryTitle';
import { ContentContainer } from './ContentContainer';

export const RightPanel = () => {
    const { title } = useContext(ScreenContext);
    return (
			<div className="right-panel">
				<CategoryScreenWrapper>
					<CategoryTitle title={title} />
					<ContentContainer />
				</CategoryScreenWrapper>
			</div>
		);
}