import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './components/pages/Homepage';
import Sales from './components/pages/Sales';
import Error from './components/pages/Error';
import Leaflet from './components/pages/Leaflet';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/slevy" component={Sales} />
          <Route path="/letak/:slug" component={Leaflet} />
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
