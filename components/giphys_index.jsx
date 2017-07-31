import React from 'react';

import GiphysIndexItem from './giphys_index_item';
import GiphyDetails from './giphy_details';

class GiphysIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false,
      giphyID: ''
    };
  }

  details(giphy){
    this.setState({showDetails: true, giphyID: giphy.id});
  }

  render(){
    let index = this.props.giphys.map(giphy => <div id='uldiv' key={giphy.id}><div onClick={this.details.bind(this, giphy)}>
        <GiphysIndexItem  giphy={giphy} />
        </div>
        <div id="box"><div></div>{ this.state.showDetails && this.state.giphyID === giphy.id? <GiphyDetails giphy={giphy} /> : null}</div>
        </div>);
    return (
      <ul>
        { index }
      </ul>
    );
  }
}


export default GiphysIndex;
