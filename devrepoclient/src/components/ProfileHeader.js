import React from 'react';
import "../index.css";
import githubLogo from "../static/githublogo.png"
import codechef from "../static/codechef.png"
import Hackerrank from "../static/Hackerrank.png"
import linkedin from "../static/linkedinlogo.png"
import mail from "../static/mail.png"
import medium from "../static/Medium.png"
import twitter from "../static/twitter.png"
import location from "../static/location.png"
import company from "../static/company.png"
import link from "../static/link.png"
import Repos from './Repos';


class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { developerId : props.developerId.match.params.developerId};
      };
    
      componentDidMount()
      {
          this.fetchUserDetails();          
      }

      fetchUserDetails()
      {
        fetch(`/developers/${this.state.developerId}`).then(response => response.json()).then(data => 
            {
                this.setState(data);
            })
      }

      

    render()
    { 
        
        return <div class="profile-page"><div class="profile-header">
            <div class="profile-header-1">The developer profile</div>
            <div class="profile-header-2">All Developers</div>
            </div>
            <div class="profile-intro">
                <div class="profile-image"><img class="avatar-image" src={this.state.avatar_url} alt="profileimage"></img></div>
                <div class="profile-details">
                <div class="profile-name">{this.state.name}</div>
                <div class="profile-bio">   <p>{this.state.bio}</p></div> 
                <div class="profile-links">
                    {this.state.github_id && <a href={this.state.url} class="profile-logo"><img src={githubLogo} alt="github logo" class="img-logo"></img></a>}
                    {this.state.Twitter && <a href={this.state.Twitter} class="profile-logo"><img src={twitter} alt="twitter logo" class="img-logo"></img></a>}
                    {this.state.codechef && <a href={this.state.codechef} class="profile-logo"><img src={codechef} alt="codechef logo" class="img-logo"></img></a>}
                    {this.state.Hackerrank && <a href={this.state.Hackerrank} class="profile-logo"><img src={Hackerrank} alt="Hackerrank logo" class="img-logo"></img></a>}
                    {this.state.linkedin && <a href={this.state.linkedin} class="profile-logo"><img src={linkedin} alt="linkedin logo" class="img-logo"></img></a>}
                    {this.state.mail && <a href={this.state.mail} class="profile-logo"><img src={mail} alt="mail logo" class="img-logo"></img></a>}
                    {this.state.medium && <a href={this.state.medium} class="profile-logo"><img src={medium} alt="medium logo" class="img-logo"></img></a>}
                </div>
                <div class="profile-location">
                    {this.state.location && <div class="location-data"><img src={location} alt="mail logo" class="img-logo"></img>{this.state.location}</div>}
                    {this.state.company && <div class="location-data"><img src={company} alt="company logo" class="img-logo"></img>{this.state.company}</div>}
                    {this.state.blog && <div class="location-data"><a href={this.state.blog}><img src={link} alt="link logo" class="img-logo"></img>{this.state.blog}</a></div>}
                </div> 
                </div>                
                </div>
                <Repos developerId={this.state.developerId}/>
            </div>
    }
}

export default ProfileHeader;