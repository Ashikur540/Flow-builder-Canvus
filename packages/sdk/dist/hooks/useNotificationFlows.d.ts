import { NotificationFLowListItem, NotificationFlowStatus } from "../types";
export declare const useNotificationFlows: () => {
    notificationFlows: NotificationFLowListItem[];
    loading: boolean;
    fetchFlows: () => Promise<void>;
    editFlow: (id: string, data: any) => Promise<void>;
    cloneFlow: (id: string) => Promise<void>;
    changeFlowStatus: (id: string, status: NotificationFlowStatus) => Promise<void>;
    createFlow: (data: any) => Promise<void>;
    getFlowById: (id: string) => Promise<void>;
    toggleFlowState: (id: string) => Promise<void>;
    deleteFlow: (id: string) => Promise<void>;
    filterFlows: (status: NotificationFlowStatus) => Promise<void>;
    searchFlows: (query: string) => Promise<void>;
    refresh: () => Promise<void>;
};
export default useNotificationFlows;
