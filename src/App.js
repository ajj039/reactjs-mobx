import React, { Component } from "react";
import Users from "./components/Users";
// import MapComponent from "./Map";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Users
        </h1>
        <Users />
      </div>
    );
  }
}
