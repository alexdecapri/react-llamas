import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeContainer from './containers/HomeContainer';
import FactsContainer from './containers/FactsContainer';
import SpotifyContainer from './containers/SpotifyContainer';

export default (
  <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
    <Route path="facts" component={FactsContainer} />
    <Route path="playlist" component={SpotifyContainer} />
  </Route>
)
