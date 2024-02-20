import Post from "./Post.jsx";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  /**
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
        **/
  const posts = useLoaderData();

  // ! React Ways to Fetch Data
  /**
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Could not fetch posts.");
            }

            setPosts(data.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setPosts((prevPosts) => {
            return [postData, ...prevPosts];
        });
    }
     **/

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              body={post.body}
              key={post.id}
              id={post.id}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
