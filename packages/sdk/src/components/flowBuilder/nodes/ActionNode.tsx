import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

export const ActionNode = ({ data }) => {
	return (
		<div className="action-node">
			<Handle type="target" position={Position.Top} id="a" />
			<div className="node-header action">Action</div>
			<div className="node-content">{data?.label}</div>
			<Handle type="source" position={Position.Bottom} id="b" />
		</div>
	);
};
