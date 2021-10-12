import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";

class Grid9 extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>9 Columns Grid</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Breakpoints</p>
                <p>
                  The grid and utilities use this common set of three breakpoints.
                </p>
                <div className="table_container">
                  <table>
                    <thead className="primary_blue">
                      <td>Breakpoint</td>
                      <td>Range</td>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Small</td>
                        <td>280px to 639px</td>
                      </tr>
                      <tr>
                        <td>Medium</td>
                        <td>640px to 1023px</td>
                      </tr>
                      <tr>
                        <td>Large</td>
                        <td>1024px and Up</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Grid</p>
                <p>
                  The grid and utilities use this common set of three breakpoints.
                </p>
                <div className="page_container">
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>
                  <div className="column lg-1 md-1 sm-1 primary_inverted ta_center democol">1</div>

                  <div className="column lg-3 md-3 sm-3 primary_blue ta_center democol">3</div>
                  <div className="column lg-3 md-3 sm-3 primary_blue ta_center democol">3</div>
                  <div className="column lg-3 md-3 sm-3 primary_blue ta_center democol">3</div>

                  <div className="column lg-9 md-9 sm-9 primary_inverted ta_center democol">9</div>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Implementation</p>
                <p>
                  A grid can contain multiple rows, each of which has one or more columns. Utility classes (large2, medium4, 
                  small12, etc) specify how large each column should be on small, medium, and large devices. The columns in a 
                  row should add up to 12 for each device size. You can make new rows by adding class="page_container" and new 
                  columns by adding class="column".
                </p>
                <div className="page_container outline">
                  <div className="column lg-3 md-3 sm-3 primary_inverted ta_center democol">3</div>
                  <div className="column lg-6 md-6 sm-6 primary_inverted ta_center democol">6</div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div className="column lg-3 md-3 sm-3 primary_inverted ta_center"&gt;3&lt;/div&gt;<br />
                          &lt;div className="column lg-6 md-6 sm-6 primary_inverted ta_center"&gt;6&lt;/div&gt;
                        </pre>
                  </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Offset</p>
                <p>
                  If you want to start any column from a offset position you just need to add offset column classes with a number 
                  and the number after is the number of columns you want to offset by.

                </p>
                <div className="page_container outline">
                  <div className="column offset-lg-6 offset-md-6 offset-sm-6 lg-3 md-3 sm-3 primary_inverted ta_center">6 Column Offset</div><br /><br />
                  <div className="column offset-lg-3 offset-md-3 offset-sm-3 lg-6 md-6 sm-6 primary_inverted ta_center">3 Column Offset</div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div class="column offset-lg-6 offset-md-6 offset-sm-3 lg-3 md-3 sm-3 primary_inverted ta_center"&gt;6 Column Offset&lt;/div&gt;<br />
                          &lt;div class="column offset-lg-3 offset-md-3 offset-sm-6 lg-6 md-6 sm-6 primary_inverted ta_center"&gt;3 Column Offset&lt;/div&gt;
                        </pre>
                </div>
                <p>Even though there is an offset-size-9 available, it should not be used as it basically means you're skipping a whole row, 
                  if that is intended, why not use a &lt;br /&gt; that would be easier.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Visiblity</p>
                <p>
                  Some designs call for certain content to be shown or hidden depending on the screen size. You can achieve this 
                  using Fluent Design's responsive visibility classes. These allow you to show or hide content at a specific 
                  screen size, or across a whole range of sizes. This can be achieved by adding 0 classes.
                </p>
                <div className="page_container outline">
                  <div className="column lg-9 md-0 sm-0 primary_inverted ta_center democol">This Block will only be visible in large screen sizes</div>
                  <div className="column lg-0 md-9 sm-0 primary_inverted ta_center democol">This Block will only be visible in medium screen sizes</div>
                  <div className="column lg-0 md-0 sm-9 primary_inverted ta_center democol">This Block will only be visible in small screen sizes</div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div class="column large12 medium0 small0 primary_inverted ta_center"&gt;This Block will only be visible in large screen sizes&lt;/div&gt;<br />
                          &lt;div class="column large0 medium12 small0 primary_inverted ta_center"&gt;This Block will only be visible in medium screen sizes&lt;/div&gt;<br />
                          &lt;div class="column large0 medium0 small12 primary_inverted ta_center"&gt;This Block will only be visible in small screen sizes&lt;/div&gt;
                        </pre>
                </div>
                <p>
                  The following table depicts which classes are hidden on which screen sizes.
                </p>
                <div className="table_container">
                  <table>
                    <thead className="primary_blue">
                      <td>Class</td>
                      <td>Small Screen Sizes</td>
                      <td>Medium Screen Sizes</td>
                      <td>Large Screen Sizes</td>
                    </thead>
                    <tbody>
                      <tr>
                        <td>sm-0</td>
                        <td>Visible</td>
                        <td>Hidden</td>
                        <td>Hidden</td>
                      </tr>
                      <tr>
                        <td>md-0</td>
                        <td>Hidden</td>
                        <td>Visible</td>
                        <td>Hidden</td>
                      </tr>
                      <tr>
                        <td>lg-0</td>
                        <td>Hidden</td>
                        <td>Hidden</td>
                        <td>Visible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

            </div><br /><br />
        </main>
        <Footer />
      </div>
    );
  }

}


export default Grid9;
