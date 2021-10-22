import React, {Component} from "react"
import './fluent.css';
import '../icons.css';
import '../App.css';
import { NavLink } from "react-router-dom";


function ShowNav(){
  document.getElementById("side").style.display=("block");
}

function HideNav(){
  document.getElementById("side").style.display=("none");
}

class Topnav extends Component{  

  render(){
    return(
      <div>
        <div className="pivot_container primary_blue top large0 medium0">
            <a href="https://fluentdesignforweb.github.io" className="pivot_heading primary_blue">Fluent Design</a>
            <NavLink to="/getstarted" className="pivot_button small0">Get Started</NavLink>
            <NavLink to="/boilerplate" className="pivot_button small0">Boilerplate</NavLink>
            <NavLink to="/styles" className="pivot_button small0">Styles</NavLink>
            <NavLink to="/controls" className="pivot_button small0">Controls</NavLink>
            <NavLink to="/iconpack" className="pivot_button small0">Icons</NavLink>
            <button className="pivot_button right large0 medium0" onClick={ShowNav}><i className="ms-Icon ms-Icon--GlobalNavButton icon-small"></i></button>
        </div>

        <div className="sidepanel_container" id="side">
          <div className="sidepanel_content right">
            <button className="mod_close_btn" onClick={HideNav}>X</button>
            <br /><br /><br /><br />
            <NavLink to="/getstarted" onClick={HideNav}><div className="panel_item">Get Started</div></NavLink>
            <NavLink to="/boilerplate" onClick={HideNav}><div className="panel_item">Boilerplate</div></NavLink>
            <NavLink to="/styles" onClick={HideNav}><div className="panel_item">Styles</div></NavLink>
            <NavLink to="/controls" onClick={HideNav}><div className="panel_item">Controls</div></NavLink>
            <NavLink to="/iconpack" onClick={HideNav}><div className="panel_item">Icons</div></NavLink>
          </div>
        </div>
      </div>
    );
  }

}


export default Topnav;
