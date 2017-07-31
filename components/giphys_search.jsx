import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys('');
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value }, () => {
      let searchTerm = this.state.searchTerm.split(' ').join('+');
      this.props.fetchSearchGiphys(searchTerm);
    });
  }

  render() {
    let { giphys } = this.props;

    return (
      <div id="search">
        <h2>You own the search box, Search anything you want!</h2>
        <input value={this.state.searchTerm} onChange={this.handleChange} />
        <div>Search Giphy</div>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
