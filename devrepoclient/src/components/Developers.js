import React from 'react';
import searchVector from "../static/Vector.png"
import "../index.css";
import AddDev from './AddDev';

class Developers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {developersInfo : []};
      };

    componentDidMount(){
        this.fetchAllDevelopers();
      };

    handleChange(event)
      {
        if(String(event.target.value) === "")
        {
          this.fetchAllDevelopers();
        }
        else{
          fetch('/api/developers').then(response => response.json()).then(data => 
            {
              let prev = [];
              const input = event.target.value;
              for(const key in data)
              {
                if(String(data[key].login).toLowerCase().includes(String(input).toLowerCase()))
                {
                    prev.push(data[key]);
                }
              }
              console.log(prev)
              this.setState({developersInfo : prev});
            })
        }
        }

    fetchAllDevelopers()
    {
      
        fetch('/api/developers').then(response => response.json()).then(data => 
            {
              let prev = this.state.developersInfo;
              prev = [];
                 for(const key in data)
                {         
                    prev.push(data[key]);
                }
                this.setState({developersInfo : prev});
            })
            
    }
    render()
    {
        return <div>
        <div class="heading">Explore developers profiles</div>
        <hr class="divider"></hr>
        <div class="search2">
        <input type="text" placeholder="Search for username" class="search" onInput={this.handleChange.bind(this)} ></input>
        <img src={searchVector} alt="vector" class="vector"></img>
        </div>
        <div class="profile-container">
        <AddDev obj = {this.state.developersInfo}/>
        </div>
        </div>
    }
}

export default Developers;