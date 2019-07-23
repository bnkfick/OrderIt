import React, { Component } from 'react';
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
          {/*this.state.show ? <DoodadBuilder /> : null*/}
          <DoodadBuilder />
          <Checkout />
        </Layout>
      </div>
      
    );
  }
}

export default App;
