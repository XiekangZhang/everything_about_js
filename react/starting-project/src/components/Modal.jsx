import styles from "./Modal.module.css";
import {useNavigation} from "react-router-dom";

function Modal({children}) {
    const navigation = useNavigation();
    function closeHandler() {
        navigation("..");
    }

    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler}/>
            <dialog open className={styles.modal}>{children}</dialog>
        </>
    )
}

export default Modal;