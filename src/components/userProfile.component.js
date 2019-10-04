import React, { useContext } from 'react'
import TextField from './textField/textField.component'
import UserDetailsContext from '../context/userDetails/userDetails.context'

const UserProfile = () => {
  const {
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails
  } = useContext(UserDetailsContext)

  return (
    <div>
      <h1>My details</h1>
      <div>
        <TextField
          label='name'
          value={name}
          onChange={e => {
            setUserDetails({ name: e.target.value })
          }}
        />
        <TextField
          label='date of birth'
          value={dateOfBirth}
          onChange={e => {
            setUserDetails({ dateOfBirth: e.target.value })
          }}
        />
        <TextField
          label='email'
          value={email}
          onChange={e => {
            setUserDetails({ email: e.target.value })
          }}
        />
        <TextField
          label='secret question'
          value={secretQuestion}
          onChange={e => {
            setUserDetails({ secretQuestion: e.target.value })
          }}
        />
        <TextField
          label='secret answer'
          value={secretAnswer}
          onChange={e => {
            setUserDetails({ secretAnswer: e.target.value })
          }}
        />
      </div>
    </div>
  )
}

export default UserProfile