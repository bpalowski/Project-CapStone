import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
import PropTypes from  'prop-types';

let words ={
 testing:
  [{
  name:'food',
},
{
  name: 'Apple',
},
{
  name: 'You',
}]
}

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool

};

class TextConvert extends React.Component {


  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props;
    for(var i = 0; i< words.testing.length; i++){
      if(words.testing[i].name === transcript){
        return console.log("yes");
      }
    }
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>

    );
  }
}

TextConvert.propTypes = propTypes;

export default SpeechRecognition(TextConvert);
