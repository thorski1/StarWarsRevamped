import React from "react";

export const CategoryScreenWrapper = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div className="category-container">{children}</div>
	);
};
