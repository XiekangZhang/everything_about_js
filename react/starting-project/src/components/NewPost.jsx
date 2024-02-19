import styles from "./NewPost.module.css";

function NewPost(props) {
    // valline js: document.querySelector("textarea").addEventListener("change", function(event) {})

    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} onChange={props.onBodyChange} required></textarea>
            </p>
            <p>
                <label htmlFor="author">Author</label>
                <input id="author" type="text" onChange={props.onAuthorChange} required/>
            </p>
        </form>
    );
}

export default NewPost;