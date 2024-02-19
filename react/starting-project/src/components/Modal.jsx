import styles from "./Modal.module.css";

function Modal({children, onHideModel}) {
    return (
        <>
            <div className={styles.backdrop} onClick={onHideModel}/>
            <dialog open className={styles.modal}>{children}</dialog>
        </>
    )
}

export default Modal;