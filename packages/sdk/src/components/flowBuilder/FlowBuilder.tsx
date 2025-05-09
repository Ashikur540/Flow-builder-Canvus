import React, { useCallback } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	addEdge,
	Node,
	Edge,
	Connection,
	useNodesState,
	useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { ConditionNode } from "../nodes/ConditionNode";
import { CustomEdge } from "../edges/CustomEdge";
import { TriggerNode } from "../nodes/TriggerNode";
import { ActionNode } from "../nodes/ActionNode";

const nodeTypes = {
	triggerNode: TriggerNode,
	actionNode: ActionNode,
	conditionNode: ConditionNode,
};

const edgeTypes = {
	customEdge: CustomEdge,
};

const initialNodes: Node[] = [
	{
		id: "1",
		type: "triggerNode",
		data: { label: "User Registration" },
		position: { x: 250, y: 5 },
	},
];

const initialEdges: Edge[] = [];

export const FlowBuilder: React.FC = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: Connection) =>
			setEdges((eds) => addEdge({ ...params, type: "customEdge" }, eds)),
		[setEdges]
	);

	return (
		<div className="flow-canvas">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				// onNodeClick={onNodeClick}
				// onEdgeClick={onEdgeClick}
				// onPaneClick={onPaneClick}
				edgeTypes={edgeTypes}
				nodeTypes={nodeTypes}
				fitView
				snapToGrid
				snapGrid={[15, 15]}
				minZoom={0.2}
				maxZoom={1.5}
				attributionPosition="bottom-left"
			>
				<Background color="#f0f0f0" gap={16} />
				<Controls />
				<MiniMap
					nodeStrokeColor={(n) => {
						if (n.type === "trigger") return "#1890ff";
						if (n.type === "action") return "#52c41a";
						if (n.type === "condition") return "#faad14";
						return "#d9d9d9";
					}}
					nodeColor={(n) => {
						if (n.type === "trigger") return "#e6f7ff";
						if (n.type === "action") return "#f6ffed";
						if (n.type === "condition") return "#fffbe6";
						return "#f5f5f5";
					}}
				/>
			</ReactFlow>
		</div>
	);
};
