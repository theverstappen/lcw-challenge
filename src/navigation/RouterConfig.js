import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Basket from "../pages/Basket";


import { NotFound } from "./NotFound";
import { ROOT, BASKET } from "./Constants";

import {  useSelector } from 'react-redux'

export const RouterConfig = () => {
  const page = useSelector((state) => state.isFavPage.isFavPage)
  return (
    <div>
      <Switch>
        <Route exact path={ROOT} render={() =>
          <>
            {page === true && <Favorites /> }
            <Home /> 
          </>
        } />
        <Route exact path={BASKET} render={() =>
          <>
            {page === true && <Favorites /> }
            <Basket /> 
          </>
        } />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
