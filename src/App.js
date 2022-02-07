import React from 'react';
import MainNavBar from './MainNavBar';
import {Outlet} from "react-router-dom";

const App = () => (
    <div>
    <MainNavBar />
    <Outlet/>
    </div>
)

export default App;
