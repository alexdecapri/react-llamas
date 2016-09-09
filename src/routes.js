import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeContainer from './containers/HomeContainer';
import FactsContainer from './containers/FactsContainer';
import SpotifyContainer from './containers/SpotifyContainer';
import AboutContainer from './containers/AboutContainer';

export default (
  <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
    <Route path="facts" component={FactsContainer} />
    <Route path="playlist" component={SpotifyContainer} />
    <Route path="about" component={AboutContainer} />
  </Route>
)
