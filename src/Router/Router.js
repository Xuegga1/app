import React, { Component } from 'react'
// import {BrowserRouter,Switch,Route,Redirect,NavLink} from 'react-router-dom'
import Head from '../component/Head'
import Food from '../component/Food'
import Main from '../view/Main'

class Router extends Component {
    render() {
        return (
            <div className='wrap'>
                 <Head/>
            <Main/>
            <Food/>
            </div>
        )
    }
}

export default Router
