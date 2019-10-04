    
import React from 'react'
//import { Wrapper, ContentWrapper, StyledRouter } from './main.styles'
//import Login from '../login'
import UserProfile from '../userProfile.component'
import ContextInfo from '../contexInfo/contextInfo.component'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  return (
    <Router>
        <div>
        <div>
            <Route>
            {/*<Login path='/' default />*/}
            <UserProfile path='/mydetails' />
            </Route>
            <ContextInfo />
        </div>
        </div>
    </Router>
  )
}

export default Main