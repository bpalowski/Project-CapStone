import React from 'react';
import PropTypes from 'prop-types';

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

class Home extends React.Component {

  constructor() {
    super();
    this.state = {listening: false};
    this.onToggleListen = this.onToggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  onToggleListen(event) {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    // console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
         console.log("listen.")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
         console.log("Stopped ")
      }
    }

    recognition.onstart = () => {
       console.log("in progress!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript

      const guess = ['yes']
      const transcriptArr = finalTranscript.split(' ');

      if(guess[0] === transcriptArr[0]){
        alert("correct");
        recognition.stop()
        recognition.onend = () => {
          console.log("Stop")
        }
      }
    }
    recognition.onerror = event => {
      alert("Error " + event.error)
    }
  }

  render() {
    return (
      <div>
        <button id='microphone-btn' onClick={this.onToggleListen} />
        <div id='interim'></div>
        <div id='final'></div>
      </div>
    )
  }
}
Home.propTypes = {
  onToggleListen: PropTypes.func
};

export default Home;
