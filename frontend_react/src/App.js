import React from "react";

import {About, Footer, Header,Work, Skills} from './container';
import { Navbar, Copyright} from './components';

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;