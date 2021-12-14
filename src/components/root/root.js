import React from 'react';
import App from '../app/app';
import Markdown from '../markdown/markdown';
import { Routes, Route } from 'react-router-dom';
import ListItem from '../listItem/listItem';

const Root = () => {
    return (
        <div>
            <App />
            <Routes>
                <Route exact path='/' component={() => <App />} />
                <Route exact path='/md' component={() => <Markdown />} />
            </Routes>
        </div>
    )
}

export default Root;