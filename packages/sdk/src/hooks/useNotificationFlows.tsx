// sdk/hooks/useNotificationFlows.ts
import { useState, useEffect } from "react";
import { NotificationFlowAPI } from "../api/NotificationFlowAPI";
import { NotificationFLowListItem, NotificationFlowStatus } from "../types";
import { message } from "antd";

const api = new NotificationFlowAPI();

export const useNotificationFlows = () => {
	const [notificationFlows, setNotificationFlows] = useState<
		NotificationFLowListItem[]
	>([]);
	const [loading, setLoading] = useState(true);

	const fetchFlows = async () => {
		setLoading(true);
		const data = await api.getAllFlows();
		setNotificationFlows(data);
		setLoading(false);
	};

	const deleteFlow = async (id: string) => {
		setLoading(true);
		await api.deleteFlow(id);
		message.success("Flow deleted successfully");
		fetchFlows();
	};

	const editFlow = async (id: string, data: any) => {
		setLoading(true);
		await api.updateFlow(id, data);
		message.success("Flow updated successfully");
		setLoading(false);
		fetchFlows();
	};
	const cloneFlow = async (id: string) => {
		setLoading(true);
		await api.cloneFlow(id);
		message.success("Flow cloned successfully");
		setLoading(false);
		fetchFlows();
	};
	const changeFlowStatus = async (
		id: string,
		status: NotificationFlowStatus
	) => {
		setLoading(true);
		await api.changeFlowStatus(id, status);
		message.success("Flow state changed");
		setLoading(false);
		fetchFlows();
	};
	const createFlow = async (data: any) => {
		setLoading(true);
		await api.createFlow(data);
		fetchFlows();
	};
	const getFlowById = async (id: string) => {
		setLoading(true);
		await api.getFlowById(id);
		setLoading(false);
	};

	const toggleFlowState = async (id: string) => {
		setLoading(true);
		await api.toggleFlowState(id);
		message.success("Flow state updated");
		setLoading(false);
		fetchFlows();
	};
	const filterFlows = async (status: NotificationFlowStatus) => {
		setLoading(true);
		const data = await api.getAllFlows();
		const filteredFlows = data.filter((flow) => flow.status === status) || data;
		setNotificationFlows(filteredFlows);
		setLoading(false);
	};
	const searchFlows = async (query: string) => {
		setLoading(true);
		const data = await api.getAllFlows();
		const filteredFlows = data.filter((flow) =>
			flow.name.toLowerCase().includes(query.toLowerCase())
		);
		setNotificationFlows(filteredFlows);
		setLoading(false);
	};

	useEffect(() => {
		fetchFlows();
	}, []);

	return {
		notificationFlows,
		loading,
		fetchFlows,
		editFlow,
		cloneFlow,
		changeFlowStatus,
		createFlow,
		getFlowById,
		toggleFlowState,
		deleteFlow,
		filterFlows,
		searchFlows,
		refresh: fetchFlows,
	};
};
export default useNotificationFlows;
