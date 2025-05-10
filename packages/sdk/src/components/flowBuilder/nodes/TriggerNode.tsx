import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

export const TriggerNode = ({ data }) => {
	return (
		<div className="trigger-node">
			<div className="node-header trigger">Trigger</div>
			<div className="node-content">{data?.label}</div>
			<Handle type="source" position={Position.Bottom} id="a" />
		</div>
	);
};
