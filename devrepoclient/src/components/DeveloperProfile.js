import React from 'react';
import ProfileHeader from "./ProfileHeader"
import "../index.css";


function DeveloperProfile(props) {
  return (
    <>
      <ProfileHeader developerId={props}/>
    </>
  );
}

export default DeveloperProfile;