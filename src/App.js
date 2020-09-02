import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './components/pages/Homepage';
import Sales from './components/pages/Sales';
import Error from './components/pages/Error';
import {Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/sales" component={Sales} />
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
