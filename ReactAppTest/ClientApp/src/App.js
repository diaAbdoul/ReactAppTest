import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path={`${process.env.PUBLIC_URL}/`}  component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/counter`}  component={Counter} />
            <Route path={`${process.env.PUBLIC_URL}/fetch-data`}  component={FetchData} />
      </Layout>
    );
  }
}
