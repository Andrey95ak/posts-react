import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import { AuthContext } from "../context/context";


const AppRouter = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <div>
            {
                isAuth
                    ?
                    <Routes>
                        <Route path="about" element={<About />}></Route>
                        <Route path="posts" element={<Posts />}></Route>
                        <Route path="posts/:id" element={<PostIdPage />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>

                    : <Login />

            }
        </div>
    );
}

export default AppRouter;