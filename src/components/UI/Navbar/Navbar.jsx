import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyBtn from "../button/MyBtn";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    return (
        <div className="nav">
            <MyBtn onClick={logout}>Выйти</MyBtn>
            <div className="nav__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
}

export default Navbar;