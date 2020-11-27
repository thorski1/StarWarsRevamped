import React from "react";

export const SolarSystemLoading = () => {
	return (
		<div className="spinner-box">
			<div className="solar-system">
				<div className="earth-orbit orbit">
					<div className="planet"></div>
					<div className="venus-orbit orbit">
						<div className="planet"></div>
						<div className="mercury-orbit orbit">
							<div className="planet"></div>
							<div className="sun"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
