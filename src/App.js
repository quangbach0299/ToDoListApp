import React, { Component } from "react";
import ToDoList from "./JSS_StyledCompontents/BaiTapStyleComponent/ToDoList/ToDoList";
// import LifeCycleReact from "./LifeCycleReact/LifeCycleReact";
// import DemoJSS from "./JSS_StyledCompontents/DemoJSS/DemoJSS";
// import DemoTheme from "./JSS_StyledCompontents/Themes/DemoTheme";

// import UserProfile from "./FormValidation/UserProfile/UserProfile";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <UserProfile></UserProfile> */}
        {/* <DemoJSS></DemoJSS> */}
        {/* <DemoTheme></DemoTheme> */}
        <ToDoList></ToDoList>
        {/* <LifeCycleReact></LifeCycleReact> */}
      </div>
    );
  }
}
