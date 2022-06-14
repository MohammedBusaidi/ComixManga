import React from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignInAuth from './routes/authentication/sign-in-auth.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import SignUpAuth from './routes/authentication/sign-up-auth.component';

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in-auth' element={<SignInAuth />} />
        <Route path='sign-up-auth' element={<SignUpAuth />} />
        <Route path='checkout' element={<Checkout />} />

      </Route>
    </Routes>
  );
};

export default App;
