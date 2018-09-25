import React from 'react';
import PropTypes from 'prop-types';



function NewRec(props){
  return (
    <div>
      <h1>Do you want to play a game??</h1>
      <button onClick={props.agreement}>?</button>
    </div>
  );
}

NewRec.propTypes = {
  agreement: PropTypes.func
};

export default NewRec;
