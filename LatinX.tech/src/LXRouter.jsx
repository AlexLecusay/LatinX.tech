import React, { Component } from "react";
import App from "./App";
import App2 from "./App2"
import ClickMe from "./ClickMe"
import Question2 from "./Question2";

import{ BrowserRouter as Router,
     Route,
      Switch,
        withRouter 
    } from "react-router-dom";

function LXRouter(props){

    return <Switch 
        location={props.location}>
        <Route path="/" exact component={App} />
        <Route path="/App2" exact component={App2}/>
        <Route path="/ClickMe" exact component={ClickMe}/>
        </Switch>

}

export default withRouter(LXRouter);
