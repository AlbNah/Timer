import './App.css'
import React, { Component } from 'react'
import Card from './UI/Card/Card';
import Text from './Components/Text/Text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: ''
    }
  }

  componentDidMount() {
    this.setState({
      timer: new Date().toLocaleTimeString()
    })
  }

  componentDidUpdate() {
    this.timeOut = setTimeout(() => {
      this.setState({
        timer: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeOut)
  }

  render() {
    return (
      <Card className="container">
        <Text>{this.state.timer}</Text>
      </Card>
         
    )
  }
}

export default App