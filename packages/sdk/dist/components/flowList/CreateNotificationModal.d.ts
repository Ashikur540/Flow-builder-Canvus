import "../../styles/main.scss";
type Props = {
    open: boolean;
    onClose: () => void;
    onCreate: (id: string) => void;
};
export declare const CreateNotificationFlowModal: ({ open, onClose, onCreate, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
