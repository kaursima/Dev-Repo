import React from 'react';
import ReposBody from './ReposBody';
import heart from "../static/heart.png"
import "../index.css";

class Repos extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props.developerId)
        this.state = { developerId : props.developerId, repositories : []};
      };
    componentDidMount()
    {
        this.fetchAllRepos();
        //console.log(props)
    }

    fetchAllRepos()
    {
        fetch(`https://api.github.com/users/${this.state.developerId}/repos`).then(response => response.json()).then(data => {
                this.setState({repositories : data});
        });
    }

    render()
    { 
        return <div class="repos">
            <div class="repos-data">
            <h1 class="repos-heading">Github repositories</h1>
            <hr class="divider"></hr>
            <ReposBody obj = {this.state.repositories}/>
            </div>
            <div class="repo-footer"><h2 class="footer-text">Made with <img src={heart} alt="heart" ></img> by Simar</h2></div>
            </div>
    }
}

export default Repos;