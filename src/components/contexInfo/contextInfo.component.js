import React, { useContext } from 'react'
//import { Wrapper, ContextObjectWrapper, Pre } from './contextInfo.styles'
import UserDetailsContext from '../../context/userDetails/userDetails.context'
//import LoadingContext from '../../context/loading.context'

const ContextInfo = () => {
  const userDetailsStoredInContext = useContext(UserDetailsContext)
  //const loadingDetailsStoredContext = useContext(LoadingContext)

  return (
    <div>
      <ContextObject
        contextName='userDetailsContext'
        obj={userDetailsStoredInContext}
      />
    </div>
  )
}

export default ContextInfo

const ContextObject = ({ contextName, obj }) => (
  <div>
    <h3>
      {contextName}
    </h3>
    {Object.keys(obj).map((key, index) => (
      <p key={key}>
        <span>{key}: </span>
        <span>{outputFormattedContextValue(obj[key])}</span>
      </p>
    ))}
  </div>
)

function outputFormattedContextValue (contextValue) {
  if (typeof contextValue !== 'function') {
    if (contextValue === 0) {
      return '0'
    }

    return contextValue || "''"
  }

  return 'function()'
}