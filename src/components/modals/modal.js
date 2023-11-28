//modal ref: https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 'auto',
                    width: 'max-content',
                    margin: "auto",
                    padding: "2%",
                    border: 'none',
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    textAlign: "center",
                }}
            >
                {children}
            </div>
        </div>
    );
};
 
export default Modal;