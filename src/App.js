import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import DoodadBuilder from './containers/DoodadBuilder/DoodadBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DoodadBuilder />
        </Layout>
      </div>
      
    );
  }
}

export default App;
