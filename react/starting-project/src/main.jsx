import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost from "./routes/NewPost.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {
                    path: "/",
                    element: <Posts/>,
                    loader: postsLoader,
                    children: [
                        {
                            path: "/create-post",
                            element: <NewPost/>
                        }
                    ]
                },

            ]
        }
    ])
;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
