import { mockFlowList } from "../data";
import { NotificationFlowStatus } from "../types";

// sdk/api/NotificationFlowAPI.ts
export class NotificationFlowAPI {
	async getAllFlows() {
		return mockFlowList;
	}

	async getFlowById(id: string) {
		return mockFlowList.find((flow) => flow.id === id);
	}

	async updateFlow(id: string, data: any) {
		const flowIndex = mockFlowList.findIndex((flow) => flow.id === id);
		if (flowIndex !== -1) {
			mockFlowList[flowIndex] = { ...mockFlowList[flowIndex], ...data };
			return mockFlowList[flowIndex];
		}
		throw new Error("Flow not found");
	}

	async createFlow(data: any) {
		const newFlow = { id: String(mockFlowList.length + 1), ...data };
		mockFlowList.push(newFlow);
		return newFlow;
	}
	async deleteFlow(id: string) {
		const flowIndex = mockFlowList.findIndex((flow) => flow.id === id);
		if (flowIndex !== -1) {
			mockFlowList.splice(flowIndex, 1);
			return true;
		}
		throw new Error("Flow not found");
	}
	async cloneFlow(id: string) {
		const flowToClone = mockFlowList.find((flow) => flow.id === id);
		if (flowToClone) {
			const clonedFlow = {
				...flowToClone,
				id: String(mockFlowList.length + 1),
			};
			mockFlowList.push(clonedFlow);
			return clonedFlow;
		}
		throw new Error("Flow not found");
	}
	async changeFlowStatus(id: string, status: NotificationFlowStatus) {
		const flowToChange = mockFlowList.find((flow) => flow.id === id);
		if (flowToChange) {
			flowToChange.status = status;
			return flowToChange;
		}
	}
	async toggleFlowState(id: string) {
		const flowToToggle = mockFlowList.find((flow) => flow.id === id);
		if (flowToToggle) {
			flowToToggle.isActive = !flowToToggle.isActive;
			return flowToToggle;
		}
		throw new Error("Flow not found");
	}
}
