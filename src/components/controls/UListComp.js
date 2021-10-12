import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class UList extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>List</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Unordered Lists</p>
                <p>
                  An unordered list starts with the &lt;ul&gt; tag. Each list item starts with the &lt;li&gt; tag. 
                  unordered lists are bulleted in nature.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  To make an unordered List, just add an "ul" tag and "li" tag to add items.
                </p><br/>

                <p className="bold">Simple Unordered List</p>
                <div className="page_container outline">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                  </ul>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;ul&gt;  <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 2&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 3&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 4&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 5&lt;/li&gt;  <br />
                        &lt;/ul&gt;
                      </pre>
                </div><br/>

                <p className="bold">Fluent Unordered List</p>
                <div className="page_container outline">
                  <ul className="u_list">
                    <li className="l_item">Item 1</li>
                    <li className="l_item">Item 2</li>
                    <li className="l_item">Item 3</li>
                    <li className="l_item">Item 4</li>
                    <li className="l_item">Item 5</li>
                  </ul>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;ul class="u_list"&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 1&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 2&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 3&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 4&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 5&lt;/li&gt;  <br />
                        &lt;/ul&gt;
                      </pre>
                </div><br/>

                <p className="bold">Fluent Unordered List with Header</p>
                <div className="page_container outline">
                  <ul className="u_list">
                    <li className="l_header">List Header</li>
                    <li className="l_item">Item 1</li>
                    <li className="l_item">Item 2</li>
                    <li className="l_item">Item 3</li>
                    <li className="l_item">Item 4</li>
                    <li className="l_item">Item 5</li>
                  </ul>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;ul class="u_list"&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_header"&gt;List Header&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 1&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 2&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 3&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 4&lt;/li&gt;  <br />
                        &nbsp;&nbsp;&lt;li class="l_item"&gt;Item 5&lt;/li&gt;  <br />
                        &lt;/ul&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Unordered Lists can be used in many ways, maybe to display a list of requirements or maybe combine with other 
                  UI Components to make even complex lists like contact cards, activity overview, notifications and much more.
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default UList;
