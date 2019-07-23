import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import DoodadBuilder from './containers/DoodadBuilder/DoodadBuilder';
import Checkout from  './containers/Checkout/Checkout';

class App extends Component {
  // state = {
  //   show: true
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }
  render() {
    return (
      <div>
        <Layout>
          {/*this.state.show ? <DoodadBuilder /> : null
          <DoodadBuilder />
          <Checkout />
          */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={DoodadBuilder} />
          </Switch>
        </Layout>
      </div>
      
    );
  }
}

export default App;
