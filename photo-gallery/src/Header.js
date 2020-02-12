import React, { Component } from "react";

export default class Header extends Component {
    render() {
      return (
        <div>
            <p>{this.props.title}</p>
        </div>
      );
    }
  }   
  
  