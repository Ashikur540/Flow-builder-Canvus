import { NotificationFlowList } from "@notification-flow/sdk";
import { useNavigate } from "react-router-dom";

export default function NotificationsFlowList() {
	const navigate = useNavigate();
	return (
		<div>
			<NotificationFlowList
				onEdit={(id) => navigate(`/notification-flow/${id}/edit`)}
			/>
		</div>
	);
}
