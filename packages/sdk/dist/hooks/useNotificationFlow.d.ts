import { Node, Edge, Connection } from "@xyflow/react";
export declare const useNotificationFlow: (initialNodes?: Node[], initialEdges?: Edge[]) => {
    nodes: Node[];
    edges: Edge[];
    setNodes: import("react").Dispatch<import("react").SetStateAction<Node[]>>;
    setEdges: import("react").Dispatch<import("react").SetStateAction<Edge[]>>;
    onNodesChange: (changes: any) => void;
    onEdgesChange: (changes: any) => void;
    onConnect: (connection: Connection) => void;
};
