import React, { Component } from 'react';
import imagesData from './Data.js';
import ImageCardItem from './ImageItem.js';


export default class FilterItems extends Component {
    render(
        
    ){

    return(
        <div>
        <select className="unicornFilter" onChange={this.props.handleChangeCallback}>
        <option value='' defaultValue>All Creatures</option>
        <option value='narwhal'>Narwhal</option>
        <option value='rhino'>Rhino</option>
        <option value='unicorn'>Unicorn</option>
        <option value='unilego'>Unilego</option>
        <option value='triceratops'>Triceratops</option>
        <option value='markhor'>Markhor</option>
        <option value='mouflon'>Mouflon</option>
        <option value='addax'>Addax</option>
        <option value='chameleon'>Chameleon</option>
        <option value='lizard'>Lizard</option>
        <option value='dragon'>Dragon</option>
    </select>
    </div>
    )
}}