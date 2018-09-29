import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/data';
import { CSSTransition } from "react-transition-group";
import HomeTwo from './HomeTwo';



class ChangeImg extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      start: true,
      image: data.images[0]
    };
    this.nextImage = this.nextImage.bind(this);
    this.toggleAppear = this.toggleAppear.bind(this);
  }

  toggleAppear(event){
   this.setState({
     start: !this.state.start
   })
 }


  nextImage(){
    const newImage = this.state.image.index+1;
    this.setState({
      image: data.images[newImage]
    })
  }


  render(){
    const {start ,image} = this.state;
    return(
      <div>
        <button onClick={() => this.toggleAppear()}>Appear: {`${start}`}</button>
        <button onClick={() => this.nextImage()}  disabled={image.index === data.images.length-1}>Test</button>
        <CSSTransition
          in={start}
          appear={true}
          timeout={600}
          >
        <HomeTwo image={image}/>
        </CSSTransition>
      </div>
    );
  }

}


export default ChangeImg;
