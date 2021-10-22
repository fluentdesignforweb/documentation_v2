import React, {Component} from "react";
import './fluent.css';
import '../App.css';
import blob from "./blob-v2.png";
import { NavLink } from "react-router-dom";

class StylesSidenav extends Component{
  
  render(){
    return(
        <nav className="column large3 medium4 small0">
            <div className="nav_content"><br /><br />

            <a href="https://fluentdesignforweb.github.io/v2/" alt="home"><img src={blob} alt="blob" style={{width: "60px"}} /></a>
                <h3 style={{display: "inline", position: "relative", top: "-20px", left: "10px"}}>Docs</h3>

                <p className="bold" style={{lineHeight: "1"}}>Installation and Stuff</p>
                <NavLink to="/newinv2">What's New</NavLink><br />
                <NavLink to="/getstarted">Get Started</NavLink><br />
                <NavLink to="/boilerplate">Boilerplate</NavLink><br />
                <NavLink to="/styles">Styles</NavLink><br />
                <NavLink to="/controls">Controls</NavLink><br />
                <NavLink to="/darkmode">Dark Mode</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>


                <p className="bold" style={{lineHeight: "1"}}>Layout and More</p>
                <NavLink to="/12colgrid">12 Col Grid</NavLink><br />
                <NavLink to="/9colgrid">9 Col Grid</NavLink><br />
                <NavLink to="/colors">Colors</NavLink><br />
                <NavLink to="/depth">Depth</NavLink><br />
                <NavLink to="/objalign">Elements Alignment</NavLink><br />
                <NavLink to="/iconpack">Icon Pack</NavLink><br />
                <NavLink to="/textalign">Text Alignment</NavLink><br />
                <NavLink to="/typography">Typography</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>


                <p className="bold" style={{lineHeight: "1"}}>Inputs - Basic</p>
                <NavLink to="/text_input">Text Input</NavLink><br />
                <NavLink to="/pass_input">Password Input</NavLink><br />
                <NavLink to="/tel_input">Tel Input</NavLink><br />
                <NavLink to="/num_input">Number Input</NavLink><br />
                <NavLink to="/email_input">Email Input</NavLink><br />
                <NavLink to="/date_input">Date Input</NavLink><br />
                <NavLink to="/date_time_input">Date Time Input</NavLink><br />
                <NavLink to="/month_input">Month Input</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>

                <p className="bold" style={{lineHeight: "1"}}>Inputs - Advanced</p>
                <NavLink to="/range">Range</NavLink><br />
                <NavLink to="/radio">Radio</NavLink><br />
                <NavLink to="/switch">Switch</NavLink><br />
                <NavLink to="/textarea">Textarea</NavLink><br />
                <NavLink to="/checkbox">Checkbox</NavLink><br />
                <NavLink to="/searchbox">Searchbox</NavLink><br />
                <NavLink to="/select">Select</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>

                <p className="bold" style={{lineHeight: "1"}}>Lists and Tables</p>
                <NavLink to="/olist">Ordered Lists</NavLink><br />
                <NavLink to="/tables">Tables</NavLink><br />
                <NavLink to="/ulist">Unordered Lists</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>
                      
                <p className="bold" style={{lineHeight: "1"}}>Navigation</p>
                <NavLink to="/pivot_menu">Pivot Menu</NavLink><br />
                <NavLink to="/command_bar">Command Bar</NavLink><br />
                <NavLink to="/breadcrumbs">Breadcrumbs</NavLink><br />
                <NavLink to="/sidenav">Side Navigation</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>
                    
                <p className="bold" style={{lineHeight: "1"}}>Progress Indicators</p>
                <NavLink to="/progress_bar">Progress Bars</NavLink><br />
                <NavLink to="/spinners">Spinners</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>

                <p className="bold" style={{lineHeight: "1"}}>Surfaces</p>
                <NavLink to="/window">Window</NavLink><br />
                <NavLink to="/sidepanel">Sidepanel</NavLink><br />
                <NavLink to="/d_box">Dialogue Box</NavLink><br />
                <NavLink to="/overlay">Overlay</NavLink><br />
                <hr className="left" style={{border: "none", marginTop: "16px" ,marginBottom: "24px",  height: "1px", backgroundColor: "#1e1e1e", width: "60%"}}/>
                    
                    
                <p className="bold" style={{lineHeight: "1"}}>Utilities</p>
                <NavLink to="/buttons">Buttons</NavLink><br />
                <NavLink to="/dropdown">Dropdown</NavLink><br />
                <NavLink to="/snackbar">Snackbar</NavLink><br />
                <NavLink to="/tooltip">Tooltip</NavLink><br />

                <br /><br /><br /><br />
              </div>

            
        </nav>
    );
  }

}


export default StylesSidenav;
