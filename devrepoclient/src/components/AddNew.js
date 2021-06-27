import React from 'react';
import "../index.css";
import githubLogo from "../static/githublogo.png"
import codechef from "../static/codechef.png"
import Hackerrank from "../static/Hackerrank.png"
import linkedin from "../static/linkedinlogo.png"
import medium from "../static/Medium.png"
import twitter from "../static/twitter.png"


class AddNew extends React.Component {
    constructor(props) {
        super(props);
        const showModal = props.show;
        this.state = {
            Github : "",
            Linkedin : "",
            Codechef : "",
            Hackerrank : "",
            Twitter : "",
            Medium : "",
            show : showModal
        };
      };

    addnewUser = () => {
        const id = this.state;
        if(id)
        {
            const request = new Request('/developers', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state)
            });
            fetch(request).then(response => response.json()).then(() => alert("User has been succesfully added! You can now close the prompt."));
        }

      }
    handleSubmit = (event) => {
        if(this.state.Github)
        {
            this.addnewUser();
        }
        else
        {
            alert("Github ID is required to proceed! ");
        }

        event.preventDefault();
    }

    handleChange = (event , id) => {
        switch(id)
        {
            case "Github" : this.setState({Github : event.target.value});
            break;
            case "Linkedin" : this.setState({Linkedin : event.target.value});
            break;
            case "Codechef" : this.setState({Codechef : event.target.value});
            break;
            case "Hackerrank" : this.setState({Hackerrank : event.target.value});
            break;
            case "Twitter" : this.setState({Twitter : event.target.value});
            break;
            case "Medium" : this.setState({Medium : event.target.value});
            break;
            default : 
        }
    }

    render()
    {
        return <div class="modal"><div class="inner-modal">
            <div class="modal-header">Add developer profile</div><br></br>
            <div class="modal-body">
                <hr class="divider"/>
            <form class="form" onSubmit={this.handleSubmit}>
            <label>
            <span class="fields-info"><img src={githubLogo} alt="github logo"/>Github*</span><br/>
            <input type="text" class="id-input" onInput={(event) => this.handleChange(event, "Github")}/><br/>
            </label>
            <label>
            <span class="fields-info"><img src={linkedin} alt="Linkedin logo"/>Linkedin</span><br/>
            <input type="text" class="id-input" onInput={(event) => this.handleChange(event, "Linkedin")}/><br/>
            </label>
            <label>
            <span class="fields-info"><img src={codechef} alt="codechef logo"/>Codechef</span><br/>
            <input type="text" class="id-input" onInput={(event) => this.handleChange(event, "Codechef")}/><br/>
            </label>
            <label>
            <span class="fields-info"><img src={Hackerrank} alt="Hackerrank logo"/>Hackerrank</span><br/>
            <input type="text" class="id-input" onInput={(event) => this.handleChange(event, "Hackerrank")}/><br/>
            </label>
            <label>
            <span class="fields-info"><img src={twitter} alt="twitter logo"/>Twitter</span><br/>
            <input type="text" class="id-input" onInput={(event) => this.handleChange(event, "Twitter")}/><br/>
            </label>
            <label>
            <span class="fields-info"><img src={medium} alt="medium logo"/>Medium</span><br/>
            <input type="text" class="id-input" onInput={(event) => this.handleChange(event, "Medium")}/><br/>
            </label><br/>
            <hr class="divider2"/>
            <div class="modal-footer" >
            
            <input type="button" value="Cancel" class="cancel-button" onClick={this.props.onCancel} />
            <input type="submit" class="submit-button" value="Submit" /></div>
            </form></div>
            </div></div>
    }
}

export default AddNew;