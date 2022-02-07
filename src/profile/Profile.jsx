import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName }) => {
  const handler = (e) => {
    e.preventDefault();
    handleName(fullName);
  };
  const styl = {
    textDecoration: "underline",
    color: "blue",
    cursor: "pointer",
  };

  const buttStyle = {
    padding: "1rem",
    color: "white",
    backgroundColor: "#endregion4F5D75",
  };
  return (
    <div>
      <h2>
        <span style={styl}>Full Name:</span> {fullName}
      </h2>
      <p>
        <span style={styl}>Biography</span> {bio}
      </p>
      <p>
        <span style={styl}>Profession:</span> {profession}
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
