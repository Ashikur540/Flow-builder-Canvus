import React from "react";
import { FlowBuilder } from "./flowBuilder/FlowBuilder";

export const NotificationFlow: React.FC = () => {
	return (
		<div className="flow-builder-page">
			<div className="flow-builder-content">
				<FlowBuilder />
			</div>
		</div>
	);
};
