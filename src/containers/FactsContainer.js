import React, { Component } from 'react';

import Facts from '../components/facts';

const style = {
  marginTop: "80px"
};

class FactsContainer extends Component {
  render() {
    return (
      <div className="wow fadeIn">
        <h2 style={style} className="text-center">Top 10 Llama Facts!</h2>
        <Facts />
      </div>
    )
  }
}

export default FactsContainer;
