import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
  state = {
    name  : '',
    age   : 0,
    height: ''
  }

  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let containcm = '';
    if(this.state.height.length > 2){
      containcm = this.state.height.substr(-2);
    }
    if( containcm !== 'cm') {
      let addCM = this.state.height + 'cm';
      this.setState({
        ...this.state,
        height: addCM
      }, () => this.props.addSmurf(this.state).then(res => res && this.props.history.push("/")));
    } else {
      this.props.addSmurf(this.state)
        .then(res => res && this.props.history.push("/"));
    }
  }

  render() {
    return (
      this.props.isAdding ? 
        <Loader type="Ball-Triangle" color="#7cc6ff" height="90" width="60" />
      :
        <div className="add-smurf">
          <h3>ADD A SMURF</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              <input value={this.state.name} onChange={this.changeHandler} type="text" name="name" id="name" title="name" placeholder="Smurf Name" required />
            </label>
            <label htmlFor="age">
              <input value={this.state.age} onChange={this.changeHandler} type="number" name="age" id="age" title="age" placeholder="Age" required />
            </label>
            <label htmlFor="height">
              <input value={this.state.height} onChange={this.changeHandler} type="text" name="height" id="height" title="height" placeholder="Smurf Height" required />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isAdding: state.isAdding
});

export default connect( mapStateToProps, { addSmurf } )(AddSmurf);