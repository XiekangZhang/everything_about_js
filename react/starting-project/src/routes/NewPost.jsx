import styles from "./NewPost.module.css";
import {useState} from "react";
import Modal from "../components/Modal.jsx";
import {Link} from "react-router-dom";

function NewPost({onAddPost}) {
    // valline js: document.querySelector("textarea").addEventListener("change", function(event) {})
    const [currentBody, setCurrentBody] = useState("");
    const [currentAuthor, setCurrentAuthor] = useState("");

    function changeBodyHandler(event) {
        setCurrentBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setCurrentAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault(); // ! prevent the browser to send the request then reload the page
        const postData = {
            body: currentBody,
            author: currentAuthor,
        };
        onAddPost(postData);
        // console.log(postData);
        onCancel();
    }

    return (
        <Modal>
            <form className={styles.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        id="body"
                        rows={3}
                        onChange={changeBodyHandler}
                        required
                    ></textarea>
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input
                        id="author"
                        type="text"
                        onChange={changeAuthorHandler}
                        required
                    />
                </p>
                <p className={styles.actions}>
                    <Link type="button" to="..">
                        Cancel
                    </Link>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;
