import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";

class TextAlign extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Alignment</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Text Alignment</p>
                <p>
                  Aligning text using Fluent Design for Web is as easy as it gets, just calling text align classes can align the text.
                </p>

                <p className="bold">Left Aligned Text</p>
                <div className="page_container outline">
                  <p className="ta_left">
                  pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
                  <br />
                  </p>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="ta_left"&gt;Text can be left aligned by adding class="ta_left" to any text.&lt;/p&gt; <br />
                        </pre>
                </div>


                <p className="bold">Right Aligned Text</p>
                <div className="page_container outline">
                  <p className="ta_right">
                  tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus                  <br />
                  </p>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="ta_right"&gt;Text can be left aligned by adding class="ta_right" to any text.&lt;/p&gt; <br />
                        </pre>
                </div>


                <p className="bold">Center Aligned Text</p>
                <div className="page_container outline">
                  <p className="ta_center">
                  pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
                  <br />
                  </p>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="ta_center"&gt;Text can be left aligned by adding class="ta_center" to any text.&lt;/p&gt; <br />
                        </pre>
                </div>


                <p className="bold">Justify Aligned Text</p>
                <div className="page_container outline">
                  <p className="ta_justify">
                  eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravidaeu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida
                  <br />
                  </p>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="ta_justify"&gt;Text can be left aligned by adding class="ta_justify" to any text.&lt;/p&gt; <br />
                        </pre>
                </div>

            </div><br /><br />

        </main><br /><br /><br />
        <Footer />
      </div>
    );
  }

}


export default TextAlign;
