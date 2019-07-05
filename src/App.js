import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://img.icons8.com/flat_round/64/000000/plus.png'></img>
      </header>
      <nav className='nav'>
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
      </nav>
      <div className='content'>
          <img src='https://www.desktopbackground.org/p/2012/03/30/366906_unbelievable-wallpapers-wallpapers-cave_1920x1080_h.jpg'></img>
      </div>
    </div>);
}

export default App;
