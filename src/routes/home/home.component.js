import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import Header from '../../components/header/header.component';

const Home = () => {

  
  return (
  <div>
    <Header />
    <Outlet />
    <Directory />
    
  </div>
);
}

export default Home;