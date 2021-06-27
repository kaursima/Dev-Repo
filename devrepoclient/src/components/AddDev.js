import React from "react";
import "../index.css";
import { Link } from 'react-router-dom';



function AddDev(props)
{
    return props.obj.map(item => {
      return <div class="avatar-component" key ={item.login}>
        <img class="avatarPicture" src={item.avatar_url} alt="avatar"></img>
        <Link to= {`/developers/${item.github_id}`} class="avatarLink">{item.login}</Link>
      </div>
    })
}
  export default AddDev;