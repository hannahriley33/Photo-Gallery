import React, { Component } from 'react'
import ImageCardItem from './ImageItem.js'




export default class ImageList extends Component {
    render() {
        const displayArray = this.props.images
        console.log(displayArray)
        return (
            <div>

            {displayArray.map((object) => {
            return <ImageCardItem animals={object}/>
         })}
            </div>
    );
}};