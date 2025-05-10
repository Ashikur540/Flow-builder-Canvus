import {
	Table,
	Select,
	Input,
	Button,
	Switch,
	Dropdown,
	Checkbox,
	Tag,
} from "antd";
import {
	CopyOutlined,
	DeleteOutlined,
	EditOutlined,
	MoreOutlined,
} from "@ant-design/icons";

import "../../styles/main.scss";

import type { ColumnsType } from "antd/es/table";

import useNotificationFlows from "../../hooks/useNotificationFlows";
import { NotificationFlowStatus } from "../../types";
import { useState } from "react";
import { CreateNotificationFlowModal } from "./CreateNotificationModal";

const { Search } = Input;

type NotificationFlowListProps = {
	onEdit: (id: string) => void;
};

export const NotificationFlowList = ({ onEdit }: NotificationFlowListProps) => {
	const {
		notificationFlows,
		toggleFlowState,
		cloneFlow,
		deleteFlow,
		filterFlows,
		searchFlows,
	} = useNotificationFlows();
	const [isModalOpen, setModalOpen] = useState(false);

	const columns: ColumnsType<any> = [
		{
			title: "",
			dataIndex: "checkbox",
			key: "checkbox",
			render: () => <Checkbox />,
			width: 20,
		},
		{
			title: "Automations",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Action",
			dataIndex: "actionCount",
			key: "actionCount",
			render: (count: number) => `${count} Actions`,
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (status: string) => (
				<Tag color={status === "published" ? "green" : "red"} key={status}>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</Tag>
			),
		},
		{
			title: "Pause/Run",
			dataIndex: "isActive",
			key: "isActive",
			render: (isActive: boolean) => (
				<Switch
					defaultChecked={isActive}
					onChange={() => toggleFlowState(isActive ? "0" : "1")}
				/>
			),
		},
		{
			title: "Action",
			key: "actions",
			dataIndex: "id",
			render: (id: string) => (
				<div className="actions-cell">
					<Button type="default" onClick={() => onEdit(id)}>
						<EditOutlined />
						Edit
					</Button>
					<Dropdown
						trigger={["click"]}
						menu={{
							items: [
								{
									key: "clone",
									label: "Clone",
									icon: <CopyOutlined />,
									onClick: () => cloneFlow(id),
								},
								{
									key: "delete",
									label: "Delete",
									icon: <DeleteOutlined />,
									onClick: () => deleteFlow(id),
								},
							],
						}}
					>
						<Button
							icon={
								<MoreOutlined
									style={{
										transform: "rotate(90deg)",
									}}
								/>
							}
						/>
					</Dropdown>
				</div>
			),
		},
	];

	const totalPublished = notificationFlows?.filter(
		(flow) => flow.status === "published"
	).length;
	const totalDraft = notificationFlows?.filter(
		(flow) => flow.status === "draft"
	).length;

	const handleCreate = (id: string) => {
		setModalOpen(false);
		onEdit(id);
	};

	return (
		<div className="automation-list">
			<div className="automation-list__header">
				<div className="status-filter">
					<Select
						defaultValue=""
						style={{ width: 120 }}
						onChange={(v) => filterFlows(v as NotificationFlowStatus)}
						options={[
							{ value: "", label: "All" },
							{
								value: "published",
								label: "Published" + ` (${totalPublished})`,
							},
							{ value: "draft", label: "Draft" + ` (${totalDraft})` },
						]}
					/>
					<Search
						placeholder="Search"
						style={{ width: 200 }}
						onSearch={(value) => searchFlows(value)}
					/>
				</div>
				<Button type="primary" onClick={() => setModalOpen(true)}>
					+ New Automation
				</Button>
			</div>

			<Table
				className="automation-list__table"
				dataSource={notificationFlows ?? []}
				columns={columns}
				rowKey="id"
				pagination={false}
			/>
			<CreateNotificationFlowModal
				open={isModalOpen}
				onClose={() => setModalOpen(false)}
				onCreate={handleCreate}
			/>
		</div>
	);
};
