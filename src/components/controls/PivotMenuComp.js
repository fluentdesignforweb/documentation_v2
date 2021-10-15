import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";
import { NavLink } from "react-router-dom";

class PivotMenu extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Pivot Menu</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  The Pivot control and related tabs pattern are used for navigating frequently accessed, distinct content categories. 
                  Pivots allow for navigation between two or more content views and relies on text headers to articulate the different 
                  sections of content.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, making Pivot Menu(s) is easy as it gets. If you want to denote the active tab 
                  an active class needs to be added.
                </p>
                <div className="outline">
                  <div className="pivot_container primary_red">
                    <NavLink className="pivot_heading">Menu Title</NavLink>
                    <NavLink className="pivot_button right" href="#">Link 4</NavLink>
                    <NavLink className="pivot_button right active" href="#">Link 3</NavLink>
                    <NavLink className="pivot_button right" href="#">Link 2</NavLink>
                    <NavLink className="pivot_button right" href="#">Link 1</NavLink>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &nbsp;&nbsp;&lt;div class="pivot_container primary_red"&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="pivot_heading"&gt;Menu Title&lt;/a&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="pivot_button right" href="#"&gt;Link 1&lt;/a&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="pivot_button right active" href="#"&gt;Link 2&lt;/a&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="pivot_button right" href="#"&gt;Link 3&lt;/a&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="pivot_button right" href="#"&gt;Link 4&lt;/a&gt;  <br />
                        &nbsp;&nbsp;&lt;/div&gt;  <br />
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Use on content-heavy pages that require a significant amount of scrolling to access the various sections.
                  Be concise on the navigation labels, ideally one or two words rather than a phrase. 
                  Make sure all the children of the Pivot component are of type PivotItem.
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}


export default PivotMenu;
