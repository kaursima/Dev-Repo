import React from 'react';
import "../index.css";
import AddNew from './AddNew';
import heart from "../static/heart.png"


class HomeFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {popupInfo : "", show: false};
      };

    addNewDeveloper = () => {
        this.setState({show : true});
    }

    handleClosemodal(event)
    {
        console.log(event)
        this.setState({show : false});
    }

    render()
    { 

        return <div>
            <hr class="divider"></hr>
            <div class="footer-text">Could not find what you were looking for?</div>
            <div class="popup">{this.state.popupInfo}</div>
            <div class="footer-message">Could not find what you were looking for?</div>
            <div class="button"><button class="add-new-developer-button" onClick={this.addNewDeveloper}>
            Add developer Info
            </button></div>
            {this.state.show && <AddNew show={this.state.show} onCancel={this.handleClosemodal.bind(this)}/>}
            <div class="repo-footer"><h2 class="footer-text">Made with <img src={heart} alt="heart" ></img> by Simar</h2></div>
            </div>
    }
}

export default HomeFooter;