// design card here
import React, { Component } from 'react'

export default class ImageCardItem extends Component {
    render() {
        let Item = this.props.animals;
        return <div>
            <img src={Item.url} height="200" width="200"></img>
            <h3>{Item.title}</h3>
            <p>{Item.description}</p>
            <p>{Item.title} has {Item.horns} horns</p>
        </div>
      
        }};