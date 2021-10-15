import React, {Component} from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import './components/fluent.css';

import Topnav from "./components/TopnavComp";
import Home from "./components/HomeComp";
import Boilerplate from "./components/BoilerplateComp";
import StyleHome from "./components/StylesHomeComp";
import ControlsHome from "./components/ControlsHomeComp";


import Typography from "./components/styles/TypographyComp";
import Colors from "./components/styles/ColorsComp";
import Depth from "./components/styles/DepthComp";
import TextAlign from "./components/styles/TextAlignComp";
import ObjAlign from "./components/styles/ObjAlignComp";
import Grid12 from "./components/styles/Grid12Comp";
import Grid9 from "./components/styles/Grid9Comp";
import Icons from "./components/styles/IconComp";

import Spinners from "./components/controls/SpinnerComp";
import ProgressBar from "./components/controls/ProgressBarComp";
import Window from "./components/controls/WindowComp";
import SidePanel from "./components/controls/SidePanelComp";
import Overlay from "./components/controls/OverlayComp";
import DialogueBox from "./components/controls/DialogueBoxComp";
import Button from "./components/controls/ButtonComp";
import Dropdown from "./components/controls/DropdownComp";
import Snackbar from "./components/controls/SnackbarComp";
import Tooltip from "./components/controls/TooltipComp";
import OList from "./components/controls/OListComp";
import UList from "./components/controls/UListComp";
import Tables from "./components/controls/TablesComp";
import TextInput from "./components/controls/TextInputComp";
import TelInput from "./components/controls/TelInputComp";
import PasswordInput from "./components/controls/PasswordInputComp";
import NumberInput from "./components/controls/NumberInputComp";
import EmailInput from "./components/controls/EmailInputComp";
import DateInput from "./components/controls/DateInputComp";
import DateTimeInput from "./components/controls/DateTimeInputComp";
import MonthInput from "./components/controls/MonthInputComp";
import Range from "./components/controls/RangeComp";
import RadioInput from "./components/controls/RadioInputComp";
import ToggleSwitch from "./components/controls/SwitchComp";
import TextArea from "./components/controls/TextareaComp";
import Checkbox from "./components/controls/CheckboxComp";
import Searchbox from "./components/controls/SearchboxComp";
import Select from "./components/controls/SelectComp";
//import AdvSelect from "./components/controls/AdvancedSelectComp";
import PivotMenu from "./components/controls/PivotMenuComp";
import CommandBar from "./components/controls/CommandBarComp";

import FourZeroFour from "./components/404Comp";
import Breadcrumbs from "./components/controls/BreadcrumbsComp";
import SideNav from "./components/controls/SideNavComp";

class App extends Component{
  
  render(){
    return(
        <Router>
          <Topnav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/boilerplate" component={Boilerplate} />
            <Route path="/getstarted" component={Home} />
            <Route path="/styles" component={StyleHome} />
            <Route path="/controls" component={ControlsHome} />

            <Route path="/typography" component={Typography} />
            <Route path="/colors" component={Colors} />
            <Route path="/depth" component={Depth} />
            <Route path="/textalign" component={TextAlign} />
            <Route path="/objalign" component={ObjAlign} />
            <Route path="/12colgrid" component={Grid12} />
            <Route path="/9colgrid" component={Grid9} />
            <Route path="/iconpack" component={Icons} />

            <Route path="/spinners" component={Spinners} />
            <Route path="/progress_bar" component={ProgressBar} />
            <Route path="/window" component={Window} />
            <Route path="/sidepanel" component={SidePanel} />
            <Route path="/overlay" component={Overlay} />
            <Route path="/d_box" component={DialogueBox} />
            <Route path="/buttons" component={Button} />
            <Route path="/dropdown" component={Dropdown} />
            <Route path="/snackbar" component={Snackbar} />
            <Route path="/tooltip" component={Tooltip} />
            <Route path="/olist" component={OList} />
            <Route path="/ulist" component={UList} />
            <Route path="/tables" component={Tables} />
            <Route path="/text_input" component={TextInput} />
            <Route path="/tel_input" component={TelInput} />
            <Route path="/pass_input" component={PasswordInput} />
            <Route path="/num_input" component={NumberInput} />
            <Route path="/email_input" component={EmailInput} />
            <Route path="/date_input" component={DateInput} />
            <Route path="/date_time_input" component={DateTimeInput} />
            <Route path="/month_input" component={MonthInput} />
            <Route path="/range" component={Range} />
            <Route path="/radio" component={RadioInput} />
            <Route path="/switch" component={ToggleSwitch} />
            <Route path="/textarea" component={TextArea} />
            <Route path="/checkbox" component={Checkbox} />
            <Route path="/searchbox" component={Searchbox} />
            <Route path="/select" component={Select} />
            <Route path="/pivot_menu" component={PivotMenu} />
            <Route path="/command_bar" component={CommandBar} />
            <Route path="/breadcrumbs" component={Breadcrumbs} />
            <Route path="/sidenav" component={SideNav} />

            <Route component={FourZeroFour} />

          </Switch>
        </Router>
    );
  }

}


export default App;