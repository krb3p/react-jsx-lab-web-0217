import React from 'react'

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>Username</label>
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit </button>
      </form>
    )
  }
}
