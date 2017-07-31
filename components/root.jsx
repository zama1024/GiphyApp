import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';
import { fetchSearchGiphys } from '../util/api_util';

const Root = ({ store }) => {
  window.fetchSearchGiphys = fetchSearchGiphys;
  window.lalala = 1;
  return (
    <Provider store={store}>
      <GiphysSearchContainer />
    </Provider>
  );
};

export default Root;
