import { Route, Routes } from 'react-router-dom';
//import Login from './Component/Login.jsx';
import React from 'react';
import Login2 from './login2.js';
//import Login from './registration.js';
import Vedu from './vedu.js';
import Var from './Var.js';
import Boat from './boat.js';
import Registration from './registration.js';
import { Link } from 'react-router-dom';
// import { Store } from 'redux';
import store from './store.js';
import { Provider } from 'react-redux';
import Dashboard from './nav.js';
import Droom from './droom.js';
import Mob from './mob.js';
import ESaf from './esaf.js';
import AboutPage from './about.js';
import Products from './Products.js';
import FeedForm from './feedback.js';
import Acc from './Account.js';


function App(){
    return(
        <div>
        <Provider store={store}>
            <Routes>
                <Route exact path='/' element={<Login2/>}/>
                <Route exact path='/login' element={<Registration/>}/>
                <Route exact path='/home' element={<Vedu/>}/>
                <Route exact path='/var' element={<Var/>}/>
                <Route exact path='/boat' element={<Boat/>}/>
                <Route exact path='/droom' element={<Droom/>}/>
                <Route exact path='/mob' element={<Mob/>}/>
                <Route exact path='/bank' element={<ESaf/>}/>
                <Route exact path='/sig' element={<Vedu/>}/>
                <Route exact path='/About' element={<AboutPage/>}/>
                <Route exact path='/prod' element={<Products/>}/>
                <Route exact path='/hom' element={<Vedu/>}/>
                <Route exact path='/reg' element={<Vedu/>}/>
                <Route exact path='/fee' element={<FeedForm/>}/>
                <Route exact path='/feedback' element={<Var/>}/>
                <Route  exact path='/account' element={<Acc/>}/>
                
                </Routes>
            </Provider>
        </div>
    );
}

export default App;

