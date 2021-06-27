import "../index.css"
import headerImage from "../static/headerImg.jpg"


function HomeHeader() {
    
    return (
        <div class="header">
            <div class="header-text">The Developer Repository</div> 
            <div class="header-image"><img src={headerImage} alt="headerimage"></img></div>
        </div>        
    )
  }
  
  export default HomeHeader;