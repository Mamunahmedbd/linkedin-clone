import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHandlePost, setSSRPostState } from "../features/modal/modalSlice";
import Input from "./Input";
import Post from "./Post";

function Feed({ posts }) {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const dispatch = useDispatch();
  const useSSRPosts = useSelector((state) => state.modalState.ssrPostState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);
      dispatch(setHandlePost(false));
      dispatch(setSSRPostState(false));
    };

    fetchPosts();
  }, [realtimePosts, dispatch]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
      {!useSSRPosts
        ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default Feed;
