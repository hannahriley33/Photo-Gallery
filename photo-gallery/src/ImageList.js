import React, { Component } from 'react'
import ImageCardItem from './ImageItem.js'




export default class ImageList extends Component {
    render() {
        const DisplayArray = this.props.images
        return (
            <div>

            {DisplayArray.map((object) => {
            return <ImageCardItem animals={object}/>
         })}
            </div>
    );
}};