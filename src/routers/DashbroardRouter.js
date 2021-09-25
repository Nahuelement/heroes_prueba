import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/DC/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'




export const DashbroardRouter = () => {
    return (
        <>

        <Navbar />
        <div className="container ml-1">
        <Switch>
        
            <Route  exact path= '/marvel' component = {MarvelScreen}/>
            <Route  exact path= '/heroe/:heroesId' component = {HeroesScreen}/>
            <Route  exact path= '/dc' component = {DcScreen}/>
            <Route  exact path= '/search' component = {SearchScreen}/>
        

            <Redirect to= '/marvel' />
        </Switch>
        </div>

            
        </>
    )
}
