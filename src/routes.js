import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeContainer from './containers/HomeContainer';
import FactsContainer from './containers/FactsContainer';
import SpotifyContainer from './containers/SpotifyContainer';
import BGImageWrapper from './components/bg_image_wrapper';

export default (
  <Route path='/' component={App}>
    <Route component={BGImageWrapper}>
      <IndexRoute component={HomeContainer} />
    </Route>
    <Route path="facts" component={FactsContainer} />
    <Route path="playlist" component={SpotifyContainer} />
  </Route>
)
