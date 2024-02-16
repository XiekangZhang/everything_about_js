import styles from './Post.module.css';

function Post(props) {

    return (
        <div className={styles.post}>
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;