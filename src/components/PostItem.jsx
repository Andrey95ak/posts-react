import React from "react";
import MyBtn from "./UI/button/MyBtn";
import { useNavigate } from "react-router-dom";


const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <div>
                    <h3>{props.number} {props.post.title}</h3>
                    <p>{props.post.body}</p>
                </div>
                <div className="posts__btns">
                    <MyBtn onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyBtn>
                    <MyBtn onClick={() => props.remove(props.post.id)}>Удалить</MyBtn>
                </div>
            </div>
        </div>
    );
}

export default PostItem;