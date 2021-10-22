import React, {Component} from "react";
import './fluent.css';
import { Fragment } from "react";
import Footer from "./FooterComp";
import Sidenav from "./SidenavComp";

class WhatsNew extends Component{
  
  render(){
    return(
        <Fragment>
        <Sidenav/>
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br /><br />
            <h6>What's new in version 2.0.x</h6>
            <br />
            <div className="page_container primary_white dlevel2">
                <p className="title bold">New Refreshed UI</p>
                <p>
                    Fluent Design for Web has been redesigned to provide a more modern, clean and consistent look and feel. The new UI is based on the latest web 
                    standards and is optimized for the latest browsers. The new version of Fluent Design for Web is also called FD Web 2.0. We have based the new 
                    UI based on WinUI3 to resemble the new UI of Windows 11.<br/>
                </p>
                    <br/><br/>
            </div>
            <br /><br />
            <div className="page_container primary_white dlevel2">
                <p className="title bold">Redesigned Components</p>
                <p>
                    The following UI Components have been redesigned with more animations, better responsiveness and a more consistent look and feel: <br/>
                    <ul className="u_list">
                        <li className="l_header">Layouts</li>
                        <li className="l_item">12 Col Grid</li>
                        <li className="l_item">9 Col Grid</li>
                        <li className="l_item">Consistent Animations</li>
                        <li className="l_item">New Icon Pack</li>
                        <li className="l_item">Rounded Corners</li>
                    </ul>
                    <br/><br/>
                    <ul className="u_list">
                        <li className="l_header">Controls</li>
                        <li className="l_item">Buttons</li>
                        <li className="l_item">Dialogue Box</li>
                        <li className="l_item">Inputs - Basic</li>
                        <li className="l_item">Inputs - Advanced</li>
                        <li className="l_item">Lists</li>
                        <li className="l_item">Switches</li>
                    </ul>
                </p>
                    <br/><br/>
            </div>
            <br /><br />
            <div className="page_container primary_white dlevel2">
                <p className="title bold">A default dark mode</p>
                <p>
                    Version 2.0.x comes with a dark mode out of the box. It is disabled by default. But it can easily be enabled by adding the following code to your 
                    &lt;head&gt; tag of your HTML page:
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
                            &lt;link href="https://fluentdesignforweb.github.io/v2/fluent-dark.css" rel="stylesheet" type="text/css" /&gt;
                        </pre>
                    </div>
                    <br/><br/>
                </p>
            </div>
            <br /><br />
        </main>

        <Footer />
        </Fragment>
    );
  }

}


export default WhatsNew;
