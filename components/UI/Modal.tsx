import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	isOpen: boolean;
	onClose?: () => void;
	backgroundClasses: string;
	contentClasses: string;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	backgroundClasses,
	contentClasses,
	children
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const [isBrowser, setIsBrowser] = useState<boolean>(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose!();
		}
	};

	const modalContent = (
		<>
			<div
				id="modal-background"
				className={backgroundClasses}
				onClick={onClose && handleCloseModal}
			>
				<div id="modal-content" className={contentClasses} ref={modalRef}>
					{children}
				</div>
			</div>
		</>
	);

	return isBrowser && isOpen
		? ReactDOM.createPortal(modalContent, document.getElementById("modal-root")!)
		: null;
};

export default Modal;
