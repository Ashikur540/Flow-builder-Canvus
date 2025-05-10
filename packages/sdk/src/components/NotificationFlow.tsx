import React from "react";
import { FlowBuilderCanvas } from "./flowBuilder";

export const NotificationFlow: React.FC = () => {
	return (
		<div className="flow-builder-page">
			<div className="flow-builder-content">
				<FlowBuilderCanvas />
			</div>
		</div>
	);
};
