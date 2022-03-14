// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    isFirstNotGiven: false,
    isLastNotGiven: false,
    isSubmit: false,
  }

  checkFirst = () => {
    const {first} = this.state
    const validity = this.validName(first)
    if (validity) {
      this.setState({isFirstNotGiven: true})
    } else {
      this.setState({isFirstNotGiven: false})
    }
  }

  checkLast = () => {
    const {last} = this.state
    const validity = this.validName(last)
    if (validity) {
      this.setState({isLastNotGiven: true})
    } else {
      this.setState({isLastNotGiven: false})
    }
  }

  changeFirst = event => {
    this.setState({
      first: event.target.value,
    })
  }

  changeLast = event => {
    this.setState({
      last: event.target.value,
    })
  }

  validName = value => {
    const name = value
    return name.length === 0
  }

  submitForm = event => {
    event.preventDefault()
    this.checkFirst()
    this.checkLast()
    const {first, last} = this.state
    const validFirst = this.validName(first)
    const validLast = this.validName(last)
    if (validFirst === false && validLast === false) {
      this.setState({isSubmit: true})
    }
  }

  newForm = () => {
    this.setState({
      first: '',
      last: '',
      isFirstNotGiven: false,
      isLastNotGiven: false,
      isSubmit: false,
    })
  }

  render() {
    const {isLastNotGiven, isFirstNotGiven, isSubmit} = this.state
    const classFirst = isFirstNotGiven ? 'error' : ''
    const classLast = isLastNotGiven ? 'error' : ''
    return (
      <div className="app-container">
        <h1>Registration</h1>
        <div className="box">
          {isSubmit ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button type="button" className="btn" onClick={this.newForm}>
                Submit Another Response
              </button>
            </div>
          ) : (
            <div>
              <form className="form" onSubmit={this.submitForm}>
                <label htmlFor="first">FIRST NAME</label>
                <input
                  id="first"
                  type="text"
                  placeholder="First name"
                  className={`first ${classFirst}`}
                  onBlur={this.checkFirst}
                  onChange={this.changeFirst}
                />
                {isFirstNotGiven && <p className="txt">Required</p>}
                <label htmlFor="last" className="LastName">
                  LAST NAME
                </label>
                <input
                  id="last"
                  type="text"
                  placeHolder="Last name"
                  className={`last ${classLast}`}
                  onBlur={this.checkLast}
                  onChange={this.changeLast}
                />
                {isLastNotGiven && <p className="txt">Required</p>}
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
