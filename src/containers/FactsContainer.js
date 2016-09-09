import React, { Component } from 'react';

import Facts from '../components/facts';

class FactsContainer extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Facts Container</h2>
        <Facts />
      </div>
    )
  }
}

export default FactsContainer;
