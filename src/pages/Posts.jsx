import React, { useEffect, useState } from "react";
import '../styles/App.css';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyBtn from "../components/UI/button/MyBtn";
import { usePosts } from "../hooks/usePosts";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: '', sort: '' });
  const [modal, setModal] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const sortAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    setIsLoadingPosts(true);
    setTimeout(async () => {
      const posts = await PostService.fetchPosts();
      setPosts(posts.data);
      setIsLoadingPosts(false);
    }, 500);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post));
  }

  return (
    <div className="App">
      <MyBtn style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        isLoadingPosts
          ? <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}><Loader/></div>
          : <PostList remove={removePost} posts={sortAndFilteredPosts} title="Список постов" />
      }
    </div>
  );
}

export default Posts;