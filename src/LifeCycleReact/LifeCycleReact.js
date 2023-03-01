import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    }
    console.log("constructor");
  }

  // state = {
  //   number: 1,
  // }

  // Đây là phương thức tĩnh
  // Được gọi khi component được sử dụng trên DOM(giao diện của app)
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  // Được gọi khi setState hoặc Props
  shouldComponentUpdate(newProps, newState) {
    // Đây là pure component 
    // console.log("shouldComponentUpdate");
    // Return true chạy tiếp các lifecycle còn lại ngược lại return false thì ko chạy tiếp các lifecycle khác
    return true;
  }


  render() {
    console.log("renderParent");
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Number : {this.state.number}</p>
        <button onClick={() => {
          this.setState({ number: this.state.number + 1 })
        }}>Increase Number</button>
        <br />
        {this.state.number === 1 ? <ChildComponent></ChildComponent> : ""}
      </div>
    )
  }

  // Được gọi sau render và chỉ bị gọi 1 lần duy nhất
  componentDidMount() {
    console.log("componentDidMount");
  }

  // Lần đầu sẽ không gọi chỉ gọi khi setState hoặc thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //Unmounting là trạng thái mà component mất khỏi giao diện do chuyển trang hoặc setState ko render ra giao diện đó
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

}
