import { NotificationFlowStatus } from "../types";
export declare class NotificationFlowAPI {
    getAllFlows(): Promise<import("../types").NotificationFLowListItem[]>;
    getFlowById(id: string): Promise<import("../types").NotificationFLowListItem | undefined>;
    updateFlow(id: string, data: any): Promise<import("../types").NotificationFLowListItem>;
    createFlow(data: any): Promise<any>;
    deleteFlow(id: string): Promise<boolean>;
    cloneFlow(id: string): Promise<{
        id: string;
        name: string;
        actionCount: number;
        status: NotificationFlowStatus;
        isActive: boolean;
    }>;
    changeFlowStatus(id: string, status: NotificationFlowStatus): Promise<import("../types").NotificationFLowListItem | undefined>;
    toggleFlowState(id: string): Promise<import("../types").NotificationFLowListItem>;
}
