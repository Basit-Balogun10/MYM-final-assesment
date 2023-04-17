import React from 'react';
import './App.css';
import SideMenu from './containers/SideMenu';
import MiddleSection from './containers/MiddleSection';
import MainSection from './containers/MainSection';

function App() {
  return (
    <div className="flex items-stretch overflow-x-scroll">
      <SideMenu />
      <MiddleSection />
      <MainSection />
    </div>
  );
}

export default App;
