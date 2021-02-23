import React, { useEffect, Fragment, useContext } from "react";
import PropTypes from "prop-types";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";
const User = (props) => {
  const githubContext = useContext(GithubContext);
  const { loading, searchUser, user, getUserRepos, repos } = githubContext;
  useEffect(() => {
    searchUser(props.match.params.login);
    getUserRepos(props.match.params.login);
  }, []);

  if (loading) return <Spinner />;
  else
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {user.hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={user.avatar_url}
              className="round-img"
              alt="user_image"
              style={{ width: "150px" }}
            />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>
          <div>
            {user.bio ? (
              <div>
                <h1>Bio</h1>
                <p>{user.bio}</p>
              </div>
            ) : null}
            <a href={user.html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {user.login ? (
                  <Fragment>
                    <strong>Username: </strong>
                    {user.login}
                  </Fragment>
                ) : null}
              </li>
              <li>
                {user.company ? (
                  <Fragment>
                    <strong>Company: </strong> {user.company}
                  </Fragment>
                ) : null}
              </li>
              <li>
                {user.blog ? (
                  <Fragment>
                    <strong>Website: </strong>
                    {user.blog}
                  </Fragment>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary ">
            Followers: {user.followers}
          </div>
          <div className="badge badge-light ">Following: {user.following}</div>
          <div className="badge badge-danger ">
            Public Repos: {user.public_repos}
          </div>
          <div className="badge badge-dark ">
            Public Gists: {user.public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
};
export default User;
