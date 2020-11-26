import React from "react";

export const CategoryTitle = ({ title }: { title: string; }) => {
	return (
		<div className="category-title-container">
			<h2 className="category-title">{title}</h2>
		</div>
	);
};
