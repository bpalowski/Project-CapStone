import React from 'react';
import PropTypes from 'prop-types';
import NewRec from'./Test';
import Home from './Home';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      booleanView: false
    };

    this.changeOfViewConformation = this.changeOfViewConformation.bind(this);
  }


  changeOfViewConformation(){
    this.setState({booleanView: true});
  }

  render(){
    let viewDisplayCurrently = null;
    if(this.state.booleanView){
      viewDisplayCurrently = <Home onToggleListen={this.props.onToggleListen}/>;
    }else{
      viewDisplayCurrently = <NewRec agreement={this.changeOfViewConformation}/>;
    }
    return (
      <div>
        {viewDisplayCurrently}
      </div>
    );
  }
}

Test.propTypes = {
  onToggleListen: PropTypes.func
};

export default Test;
