import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) return <Spinner />;
  else
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem
            key={user.id}
            image={user.avatar_url}
            name={user.login}
            link={user.html_url}
          />
        ))}
      </div>
    );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
