// design card here
import React, { Component } from 'react'
import './App.css';

export default class ImageCardItem extends Component {
    render() {
        let Item = this.props.animals;
        return <div className="card">
            <img src={Item.url} height="200" width="200" alt=""></img>
            <h3>{Item.title}</h3>
            <p>{Item.description}</p>
            <p>{Item.title} has {Item.horns} horns</p>
        </div>
      
        }};