import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyBtn from "../components/UI/button/MyBtn";
import { AuthContext } from "../context/context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true);
    }

    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput placeholder="Введите логин"/>
                <MyInput placeholder="Введите пароль"/>
                <MyBtn>Войти</MyBtn>
            </form>
        </div>
    );
}

export default Login;