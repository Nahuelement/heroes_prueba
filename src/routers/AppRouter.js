import React, { useContext } from 'react'

import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashbroardRouter } from './DashbroardRouter';
import { PrivateRouter } from './PrivateRouter';







export const AppRouter = () => {

const {user} = useContext(AuthContext)

    return (
        <Router>
          <div>

            <Switch>
                <Route exact path="/login" component = {LoginScreen} />
                <PrivateRouter  
                path="/" 
                component = {DashbroardRouter}
                isAuthenticated = {user.logged}
                
                
                />

            </Switch>

          </div>
        </Router>
      );
    }
