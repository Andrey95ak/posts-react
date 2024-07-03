import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [isLoadingComments, setIsLoadingComments] = useState(false);

    useEffect(() => {
        getPostId(params.id);
        getComments(params.id);
    }, []);

    async function getPostId(id) {
        await PostService.getByIdPost(id);
    }

    function getComments(id) {
        setIsLoadingComments(true);
        setTimeout(async () => {
            const comments = await PostService.getCommentsById(id);
            setComments(comments.data);
            setIsLoadingComments(false);
        }, 100);
    }

    return (
        <div style={{ marginLeft: "15px" }}>
            <h1>Вы открыли страницу по индексу: {params.id}</h1>
            <h3>Коментарии:</h3>
            {
                isLoadingComments
                    ? <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}><Loader /></div>
                    : <div>
                        {comments.map(comm =>
                            <div key={comm.id} style={{ marginTop: "15px" }}>
                                <h3>{comm.email}</h3>
                                <p>{comm.body}</p>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
}

export default PostIdPage;