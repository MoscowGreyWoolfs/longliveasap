import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { DataTable } from './components/Table';
import { Counter } from './components/Counter';

import './custom.css'
import { VKFriends } from './components/VKFriends';
import { VKstat } from './components/VKstat';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
            <Route path='/data-table' component={DataTable} />
            <Route path='/vkfriends' component={VKFriends} />
            <Route path='/vkstat' component={VKstat} />
      </Layout>
    );
  }
}
