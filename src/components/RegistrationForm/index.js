// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    const {isFormSubmitted} = this.state

    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: !isFormSubmitted})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onBlurFirstName = () => {
    const ccbp submit RJSCPYGCFL = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  renderRegistrationForm = () => {
    const {
      firstNameInput,
      lastNameInput,
      showFirstNameError,
      showLastNameError,
    } = this.state

    return (
      <form className="registration-card" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label htmlFor="firstName" className="input-label">
            FIRST NAME
          </label>
          <input
            id="firstName"
            type="input"
            value={firstNameInput}
            placeholder="First name"
            onChange={this.onChangeFirstName}
            className="input-field"
            onBlur={this.onBlurFirstName}
          />
          {showFirstNameError && <p className="error-message">Required</p>}
        </div>

        <div className="input-container">
          <label htmlFor="lastName" className="input-label">
            LAST NAME
          </label>
          <input
            id="lastName"
            type="input"
            value={lastNameInput}
            placeholder="Last name"
            onChange={this.onChangeLastName}
            className="input-field"
            onBlur={this.onBlurLastName}
          />
          {showLastNameError && <p className="error-message">Required</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () =>
    this.setState({
      firstNameInput: '',
      lastNameInput: '',
      isFormSubmitted: false,
      showFirstNameError: false,
      showLastNameError: false,
    })

  renderSuccessView = () => (
    <div className="registration-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="registration-title">Registration</h1>
        {isFormSubmitted
          ? this.renderSuccessView()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
