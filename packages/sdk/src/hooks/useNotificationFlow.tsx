import { useState, useCallback } from "react";
import { Node, Edge, Connection, addEdge } from "@xyflow/react";

export const useNotificationFlow = (
	initialNodes: Node[] = [],
	initialEdges: Edge[] = []
) => {
	const [nodes, setNodes] = useState<Node[]>(initialNodes);
	const [edges, setEdges] = useState<Edge[]>(initialEdges);

	const onNodesChange = useCallback((changes: any) => {
		setNodes((nds) => {
			// Apply changes to nodes
			return nds.map((node) => {
				const change = changes.find((c: any) => c.id === node.id);
				if (change) {
					return { ...node, ...change };
				}
				return node;
			});
		});
	}, []);

	const onEdgesChange = useCallback((changes: any) => {
		setEdges((eds) => {
			// Apply changes to edges
			return eds.map((edge) => {
				const change = changes.find((c: any) => c.id === edge.id);
				if (change) {
					return { ...edge, ...change };
				}
				return edge;
			});
		});
	}, []);

	const onConnect = useCallback((connection: Connection) => {
		setEdges((eds) => addEdge({ ...connection, type: "customEdge" }, eds));
	}, []);

	return {
		nodes,
		edges,
		setNodes,
		setEdges,
		onNodesChange,
		onEdgesChange,
		onConnect,
	};
};
