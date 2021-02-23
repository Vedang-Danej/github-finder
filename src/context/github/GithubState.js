import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS,
} from "../types";
let githubClientID;
let githubClientSecret;
if (process.env.NODE_ENV !== "production") {
  githubClientID = githubClientID;
  githubClientSecret = githubClientSecret;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_USERS, payload: res.data.items });
    // setUsers(res.data.items);
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  const searchUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: SEARCH_USER, payload: res.data });
  };
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        searchUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
