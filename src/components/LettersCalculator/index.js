import './index.css'

const LettersCalculator = props => {
  const {count, updateCounts} = props

  const changeInput = event => {
    const valueLength = event.target.value.length
    updateCounts(valueLength)
  }

  return (
    <div className="main-con">
      <div className="card-1">
        <h1 className="card-head">Calculate the Letters you enter</h1>
        <label htmlFor="phraseInput" className="card-para">
          Enter the phrase
        </label>
        <input
          type="text"
          id="phraseInput"
          className="input-calc"
          placeholder="Enter the phrase"
          name="phraseInput"
          onChange={changeInput}
        />
        <div>
          <p className="btn-3" type="button">
            No.of letters: {count}
          </p>
        </div>
      </div>
      <div className="card-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="images"
        />
      </div>
    </div>
  )
}

export default LettersCalculator
