import React from "react";

export const PaginationButton = ({
	clickHandler,
	label,
}: {
	clickHandler: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	label: string;
}) => {
	return (
		<button
			className="pagination-button"
			onClick={clickHandler}
		>
			<h2>{label}</h2>
		</button>
	);
};
