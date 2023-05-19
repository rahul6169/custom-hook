import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import {
  CommentCustomHook,
  PostCustomHook,
  UserCustomHook,
} from "./customeHook.interface";

export const useGetUsers = () => {
  const [user, setUsers] = useState<UserCustomHook>();
  const [post, setPost] = useState<PostCustomHook>();
  const [comment, setCommment] = useState<CommentCustomHook>();
  const [userLoading, setUserLoading] = useState<Boolean>(false);
  const [postLoading, setPostLoading] = useState<Boolean>(false);
  const [commentLoading, setCommentLoading] = useState<Boolean>(false);
  const [userError, setUserError] = useState();
  const [postError, setPostError] = useState();
  const [commentError, setCommentError] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setUserLoading(true);
      const getUsersResponse: UserCustomHook = await axios?.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(getUsersResponse);
    } catch (userError: any) {
      console.error("user error", userError);
      setUserError(userError);
      setUserLoading(false);
    }

    try {
      setPostLoading(true);
      const getPostsResponse2: PostCustomHook = await axios?.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPost(getPostsResponse2);
    } catch (error: any) {
      console.error("post error", error);
      setPostError(error);
      setPostLoading(false);
    }

    try {
      setCommentLoading(true);
      const getCommentsResponse3: CommentCustomHook = await axios?.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      setCommment(getCommentsResponse3);
    } catch (error: any) {
      console.log("comment error", error);
      setCommentError(error);
    }
    setCommentLoading(false);
  };

  return [
    { user, userError, userLoading },
    { post, postError, postLoading },
    { comment, commentError, commentLoading },
  ];
};
