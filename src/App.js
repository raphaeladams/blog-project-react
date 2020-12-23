import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Users from './components/Users';
import NewPost from './components/NewPost';
import Polaris from './components/Polaris';
import ListOfPosts from './components/ListOfPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Post from './components/Post';


export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/polaris">
            <Polaris />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/posts/new">
            <NewPost />
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
