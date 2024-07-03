import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyBtn from "./UI/button/MyBtn";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        create({ ...post, id: Date.now()});
        setPost({ title: '', body: '' });
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="описание поста"
            />
            <MyBtn onClick={addNewPost}>Создать пост</MyBtn>
        </form>
    );
}

export default PostForm;