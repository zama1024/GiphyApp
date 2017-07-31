import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      giphyID: ''
    }
  }

  details(giphy){
    this.setState({giphyID: giphy.id})
  }

  render(){
    let index = this.props.giphys.map(giphy => <div id="uldiv" onClick={this.details.bind(this, giphy)} key={giphy.id}><GiphysIndexItem  giphy={giphy} /></div>);
    return (
      <ul>
        { index }
      </ul>
    );
  }
}


export default GiphysIndex;
