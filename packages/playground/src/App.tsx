import "./App.css";
import "@notification-flow/sdk/dist/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotificationsFlowList from "./pages/notifcation-fow-list";
import EditNotificationFlow from "./pages/edit-flow";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/notification-flow" element={<NotificationsFlowList />} />
				<Route
					path="/notification-flow/:id/edit"
					element={<EditNotificationFlow />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
