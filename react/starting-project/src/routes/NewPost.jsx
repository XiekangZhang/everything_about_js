import styles from "./NewPost.module.css";
import Modal from "../components/Modal.jsx";
import {Form, Link, redirect} from "react-router-dom";

function NewPost() {
    // valline js: document.querySelector("textarea").addEventListener("change", function(event) {})
    // react way to post data
    /**
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
     }
     **/
    return (
        <Modal>
            <Form className={styles.form} method="post">
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" rows={3} name="body" required></textarea>
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input id="author" type="text" name="author" required/>
                </p>
                <p className={styles.actions}>
                    <Link type="button" to="..">
                        Cancel
                    </Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return redirect("/");
}