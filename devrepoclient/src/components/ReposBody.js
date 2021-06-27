import React from 'react';
import arrow from '../static/arrow.png'
import "../index.css";

function ReposBody(props)
{
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return props.obj.map(item => {
      return <div class="repos-component">
        <a href={item.html_url} class="repo-name">{item.name}<img src={arrow} alt="vector" class="logo"></img></a>
        <span class="date">Updated on {new Date(item.updated_at).getDate() + " " + Month[new Date(item.updated_at).getMonth()] + " " + new Date(item.updated_at).getFullYear()}</span><br></br>
        {item.description}<br></br>
        <hr class="divider"></hr>
      </div>
    })
}

export default ReposBody;