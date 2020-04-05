import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';

import './custom.css'
import { VKFriends } from './components/VKFriends';
import { VKstat } from './components/VKstat';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={VKFriends} />
            <Route path='/vkstat' component={VKstat} />
            <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
