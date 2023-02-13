// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputSearch: ''}

  calculate = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    const l = inputSearch.length
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="container-1">
            <h1 className="heading">
              Calculate the <br /> letters You <br /> enter
            </h1>
            <div className="aaaa">
              <label htmlFor="subbu" className="para">
                Enter the phrase
              </label>
              <input
                id="subbu"
                className="input"
                type="text"
                placeholder="Enter the Phrase"
                onChange={this.calculate}
              />
            </div>
            <div className="container">
              <p className="no-of-letters">No.of letters: {l}</p>
            </div>
          </div>
          <div className="container-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
