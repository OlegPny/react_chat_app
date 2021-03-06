import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/messages'
                           render={() => <Dialogs dialogsState={props.state.dialogsState}/>}/>
                    <Route path='/profile'
                           render = {() => <Profile profileState={props.state.profileState}
                                                    dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;