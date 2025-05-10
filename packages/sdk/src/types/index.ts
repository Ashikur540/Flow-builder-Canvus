export type NotificationFlowStatus = "published" | "draft";

export interface NotificationFLowListItem {
	id: string;
	name: string;
	actionCount: number;
	status: NotificationFlowStatus;
	isActive: boolean;
}
