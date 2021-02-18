import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/experience" component={Experience} />
                <Route path="/projects" component={Projects} />
                <Route path="/*" component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;