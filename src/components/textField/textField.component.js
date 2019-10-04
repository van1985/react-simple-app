import React from 'react'
//import { Wrapper, Label, Input } from './textField.styles'

const TextField = ({ label, value, ...rest }) => (
  <div>
    <h3>{label}</h3>
    <input value={value} {...rest} />
  </div>
)

export default TextField