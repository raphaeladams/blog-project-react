import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Users from './components/Users';
import ListOfPosts from './components/ListOfPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <ListOfPosts />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
