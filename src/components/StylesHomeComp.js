import React, {Component} from "react"
import './fluent.css';

import StylesSidenav from "./StylesSidenavComp";
import Styles from "./StyleComp";
import Footer from "./FooterComp";

class StyleHome extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <Styles /><br /><br />
        <Footer/>
      </div>
    );
  }

}


export default StyleHome;