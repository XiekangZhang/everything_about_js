import styles from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
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
    console.log(postData);
    onCancel();
  }

  return (
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
