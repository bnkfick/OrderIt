import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import DoodadBuilder from './containers/DoodadBuilder/DoodadBuilder';

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
        </Layout>
      </div>
      
    );
  }
}

export default App;
