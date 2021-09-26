import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/type'



export const LoginScreen = ({history}) => {

    const lastpath = localStorage.getItem('lastpath')

    const {dispatch} = useContext(AuthContext)


    const handleLogin = () => {
        dispatch({
            type:types.login,
            payload :{
                name:'Nahuel'}
        })
        history.replace(lastpath)
    }
    return (
        <div className="container mt-5">

            <h1>LoginScreen</h1>
            <hr/>

            <button className="btn btn-primary" onClick={handleLogin}>
                ingresar
            </button>
            
        </div>
    )
}
