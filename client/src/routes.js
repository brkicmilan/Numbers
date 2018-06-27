import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './components/Search/search';
import NumberView from './components/Number/index';
import AddNumber from './containers/Admin/add';
import EditNumber from './containers/Admin/edit';
import Login from './containers/Admin/login';
import User from './components/Admin';
import UserPosts from './components/Admin/userPosts';
import Register from './containers/Admin/register';
import Logout from './containers/Admin/logout';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Search, true)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user/logout" exact component={Auth(Logout, true)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/add" exact component={Auth(AddNumber, true)} />
        <Route path="/user/register" exact component={Auth(Register, true)} />
        <Route path="/user/edit-post/:id" exact component={Auth(EditNumber, true)} />
        <Route path="/numbers/:id" exact component={Auth(NumberView, true)} />
        <Route path="/user/user-reviews" exact component={Auth(UserPosts, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;