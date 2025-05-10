import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, Space } from "antd";
import "../../styles/main.scss";

const { Option } = Select;

const mockTriggers = [
	{ id: "user_registered", label: "User Registered" },
	{ id: "order_completed", label: "Order Completed" },
	{ id: "form_submitted", label: "Form Submitted" },
];

type Props = {
	open: boolean;
	onClose: () => void;
	onCreate: (id: string) => void;
};

export const CreateNotificationFlowModal = ({
	open,
	onClose,
	onCreate,
}: Props) => {
	const [form] = Form.useForm();
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async () => {
		try {
			const values = await form.validateFields();
			console.log("Creating flow with values:", values);
			setSubmitting(true);
			// API call
			setTimeout(() => {
				const newId = `${Date.now()}`;
				setSubmitting(false);
				form.resetFields();
				onCreate(newId); // navigate to the new flow edit page
			}, 500);
		} catch (err) {
			// Do nothing; handled by form validation
		}
	};

	const handleCancel = () => {
		form.resetFields();
		onClose();
	};

	return (
		<Modal
			open={open}
			title="Create New Automation"
			onCancel={handleCancel}
			footer={null}
			className="create-flow-modal"
		>
			<Form form={form} layout="vertical">
				<Form.Item
					label="Flow Name"
					name="name"
					rules={[{ required: true, message: "Please enter flow name" }]}
				>
					<Input placeholder="e.g. Welcome Email for Signup" />
				</Form.Item>

				<Form.Item
					label="Trigger Event"
					name="trigger"
					rules={[{ required: true, message: "Please select a trigger" }]}
				>
					<Select placeholder="Select a trigger">
						{mockTriggers.map((trigger) => (
							<Option key={trigger.id} value={trigger.id}>
								{trigger.label}
							</Option>
						))}
					</Select>
				</Form.Item>

				<Form.Item className="form-actions">
					<Space className="form-actions__buttons">
						<Button onClick={handleCancel}>Cancel</Button>
						<Button type="primary" loading={submitting} onClick={handleSubmit}>
							Create
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</Modal>
	);
};
