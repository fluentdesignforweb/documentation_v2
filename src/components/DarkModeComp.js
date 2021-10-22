import React, {Component} from "react";
import './fluent.css';
import { Fragment } from "react";
import Footer from "./FooterComp";
import Sidenav from "./SidenavComp";

class DarkMode extends Component{
  
  render(){
    return(
        <Fragment>
        <Sidenav/>
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br /><br />
            <h6>Auto Dark Mode</h6>
            <br />
            <div className="page_container primary_white dlevel2">
                <p className="title bold">Dark mode</p>
                <p>
                    Now this is not your typical dark mode. It's a dark mode that automatically switches on and off based on the user's preferred color scheme.
                    If the user's browser or device is set to dark mode, the dark mode will be activated. To enable this you just need to add the following code to your HTML file:
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
                            &lt;link href="https://fluentdesignforweb.github.io/v2/fluent-dark.css" rel="stylesheet" type="text/css" /&gt;
                        </pre>
                    </div>
                    <br/><br/>
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white dlevel2">
                <p className="title bold">For React</p>
                <p>
                    To enable the dark mode for React you can import the following in your React component:
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
                            import './components/fluent-dark.css';
                        </pre>
                    </div>
                    <br/>
                </p>
                <p>
                    By default the developer doesn't have a switch to enable/disable dark mode, if the user has set his/her system scheme in dark mode, it will be activated automatically.
                    But developers can use conditional rendering to make a switch to enable/disable dark mode. You can refer this article for more details:<br/>
                    <a target="blank" href="https://prawira.medium.com/react-conditional-import-conditional-css-import-110cc58e0da6#:~:text=React%20Conditional%20Import%20%2F%20Conditional%20CSS%20Import%201,example%20uses%20theme%20selector%20as%20an%20example.%20">
                        <button className="secondary_blue">Conditional Rendering in React</button>
                    </a>
                </p>
            </div>
            <br /><br />
        </main>

        <Footer />
        </Fragment>
    );
  }

}


export default DarkMode;
