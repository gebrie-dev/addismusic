import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import NavBarPanel from './NavBarPanel'; // Adjust the import path to match the directory structure
import Footer from './Footer'; // Adjust the import path to match the directory structure

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
      <Footer />
    </>
  );
};

export default RootLayout;
