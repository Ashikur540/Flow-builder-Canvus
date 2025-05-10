import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

export const ConditionNode = ({ data }) => {
	return (
		<div className="condition-node">
			<Handle type="target" position={Position.Top} id="a" />
			<div className="node-header condition">Condition</div>
			<div className="node-content">{data?.label}</div>
			<Handle
				type="source"
				position={Position.Bottom}
				id="b"
				style={{ left: "30%" }}
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				id="c"
				style={{ left: "70%" }}
			/>
		</div>
	);
};
