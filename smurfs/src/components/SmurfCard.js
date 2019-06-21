import React from 'react';

import SmurfInfo from './SmurfInfo';
import SmurfEdit from './SmurfEdit';

class SmurfCard extends React.Component {
  state = {
    isEdit: false
  }

  editItem = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  render() {
    return (
      this.state.isEdit ?
        <SmurfEdit smurfInfo={this.props.smurfInfo} editItem={this.editItem} />
      :
        <SmurfInfo smurfInfo={this.props.smurfInfo} editItem={this.editItem} />
    )
  }
}

export default SmurfCard;