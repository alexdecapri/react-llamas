import React, { Component } from 'react';

import Facts from '../components/facts';

const style = {
  marginTop: "50px"
};

class FactsContainer extends Component {
  render() {
    return (
      <div>
        <h2 style={style} className="text-center">Facts Container</h2>
        <Facts />
      </div>
    )
  }
}

export default FactsContainer;
