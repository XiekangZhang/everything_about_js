import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function hideModalHandler() {
        setIsModalVisible(false);
    }

    function showModalHandler() {
        setIsModalVisible(true);
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandler}/>
            <main>
                <PostsList isPosting={isModalVisible} onStopPosting={hideModalHandler}/>
            </main>
        </>
    );
}

export default App;
