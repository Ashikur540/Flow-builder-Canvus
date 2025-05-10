import { NotificationFLowListItem } from "../types";

export const mockFlowList: NotificationFLowListItem[] = [
	{
		id: "1",
		name: "Customer Created",
		actionCount: 3,
		status: "published",
		isActive: true,
	},
	{
		id: "2",
		name: "Booking Update",
		actionCount: 3,
		status: "draft",
		isActive: false,
	},
	{
		id: "3",
		name: "Booking Created",
		actionCount: 2,
		status: "published",
		isActive: true,
	},
];
