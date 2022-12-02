// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevstate => ({count: prevstate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="spanEl">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement}>
          click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
