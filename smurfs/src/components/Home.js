import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Loader from 'react-loader-spinner';

import SmurfCard from './SmurfCard';

class Home extends React.Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  
  render() {
    return (
      <div className="smurf-listing">
        {this.props.isFetching ?
          <Loader type="Ball-Triangle" color="#7cc6ff" height="90" width="60" />
        :
          this.props.smurfsList.map( (smurfInfo,i) => <SmurfCard smurfInfo={smurfInfo} key={i} /> )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  smurfsList: state.smurfsList,
  isFetching: state.isFetching
});

export default connect( mapStateToProps, { getSmurfs } )(Home);