import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ImageCardItem from './ImageItem.js';
import images from './Data.js';
import ImageList from './ImageList.js';
import FilterItems from './FilterItems.js';

export default class App extends Component {
  state = { selected: null };
  render() {
    const keywordFilter = images.filter(image => {
      if(!this.state.selected) return true;
      return image.keyword === this.state.selected;
  
    });
    
    const handleChange = e => {
      this.setState({ selected: e.target.value });
   

    };
  return (
  <>
     
     <FilterItems handleChangeCallback={handleChange}/>
     
     <ImageList images={keywordFilter} />
  </>
  );
}};  


