import React from 'react'
import { useResourceList } from '../api-hooks/useResourceList';
import { ResourceList } from './ResourceList';

export const LeftPanel = () => {
    const resourceObj = useResourceList();
    return (
			<div className="left-panel">
				<div className="logo-container">
					<img
						src="./star-wars-logo.png"
						height="320px"
						width="400px"
						alt="star wars logo"
					/>
				</div>

				{resourceObj.data ? (
					<ResourceList />
				) : resourceObj.isLoading ? (
					<h1>Loading...</h1>
				) : resourceObj.isError ? (
					<h1>Something went wrong!</h1>
				) : null}
			</div>
		);
}
