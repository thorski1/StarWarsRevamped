import React from "react";

export const ItemInfoLine = ({
	label,
	value,
}: {
	label: string;
	value: string;
}) => {
	return (
		<h3 className="line-item-label">
			{label}:{" "}
			<span className="line-item-value">{value}</span>
		</h3>
	);
};
