import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  return (
    <div className="card text-center">
      <img src={props.image} className="round-img" style={{ width: "60px" }} />
      <h3>{props.name}</h3>
      <Link to={`/user/${props.name}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};
UserItem.prototype = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default UserItem;
