import Post from "./Post.jsx";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

function PostsList() {
    const [currentBody, setCurrentBody] = useState("");
    const [currentAuthor, setCurrentAuthor] = useState("");

    function changeBodyHandler(event) {
        setCurrentBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setCurrentAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            </Modal>
            <ul className={styles.posts}>
                <Post author={currentAuthor} body={currentBody}/>
                <Post author="Li" body="Nice tutorial!"/>
            </ul>
        </>
    );
}

export default PostsList;