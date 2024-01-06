import {Component} from 'react'
import LettersCalculator from './components/LettersCalculator'

import './App.css'

class App extends Component {
  state = {count: 0}

  updateCounts = valueLength => {
    this.setState({count: valueLength})
  }

  render() {
    const {count} = this.state
    return (
      <body>
        <LettersCalculator count={count} updateCounts={this.updateCounts} />
      </body>
    )
  }
}

export default App
