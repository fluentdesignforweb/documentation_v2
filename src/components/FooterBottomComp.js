import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './fluent.css';

class Footer extends Component{
  
  render(){
    return(
      <footer>
        <div class="column lg-3 md-3 sm-9">
          <p class="ta_center footerTitle">GitHub Actions</p>
          <p class="ta_center footerLink">
            <NavLink to="#">Submit an Issue</NavLink>
            <NavLink to="#">Star on Github</NavLink>
            <NavLink to="#">Fork on Github</NavLink>
          </p>
        </div>

        <div class="column lg-3 md-3 sm-9">
          <p class="ta_center footerTitle">Important Links</p>
          <p class="ta_center footerLink">
            <a href="https://fluentdesignforweb.github.io/documentation/">Docs 1.0.x</a>
            <a href="https://fluentdesignforweb.github.io/documentation_v2/">Docs 2.0.x</a>
            <a href="https://www.npmjs.com/package/fdweb">Installation</a>
          </p>
        </div>

        <div class="column lg-3 md-3 sm-9">
          <p class="ta_center footerTitle">Featured Projects</p>
          <p class="ta_center footerLink">
            <a href="https://shivendrasaurav.github.io/corona-rakshak/">Corona Rakshak</a>
            <a href="https://hisabkitabapp.herokuapp.com/">Hisab Kitab</a>
            <a href="https://revahack.com/">REVA HACK 2021</a>
          </p>
        </div>
        <div class="column lg-7 md-7 sm-9 center">
          <hr/>
          <p>Free and Open Source</p>
        </div>


      </footer>
    );
  }

}


export default Footer;