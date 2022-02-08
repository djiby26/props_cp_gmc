import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const handler = (e) => {
    e.preventDefault();
    props.handleName(props.fullName);
  };
  const styl = {
    textDecoration: "underline",
    color: "blue",
    cursor: "pointer",
  };

  const buttStyle = {
    padding: "1rem",
    color: "white",
    backgroundColor: "#4F5D75",
  };
  return (
    <div>
      {/* {props.children} */}
      <img style={{ width: "30%" }} src={props.children} alt="profile" />
      <h2>
        <span style={styl}>Full Name:</span> {props.fullName}
      </h2>
      <p>
        <span style={styl}>Biography</span> {props.bio}
      </p>
      <p>
        <span style={styl}>Profession:</span> {props.profession}
      </p>
      <button style={buttStyle} onClick={handler}>
        What's My Name!
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "rien",
  bio: "rien",
  profession: "rien",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
