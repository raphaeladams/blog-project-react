import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListOfPosts from './components/ListOfPosts';

function App() {
  return (
    <div className="App">
      <Header/>
      <ListOfPosts/>
      <Footer/>
    </div>
  );
}

export default App;
