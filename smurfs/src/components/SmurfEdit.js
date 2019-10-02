import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { editSmurf, deleteSmurf } from '../actions';

class SmurfEdit extends React.Component {
  state = {
    id: this.props.smurfInfo.id,
    name: this.props.smurfInfo.name,
    age: this.props.smurfInfo.age,
    height: this.props.smurfInfo.height
  }

  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  submitEdits = event => {
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
      }, () => this.props.editSmurf(this.state).then(res => res && this.props.editItem()));
    } else {
      this.props.editSmurf(this.state).then(res => res && this.props.editItem());
    }
  }

  deleteSmurf = event => {
    event.preventDefault();
    this.props.deleteSmurf(this.state).then(res => console.log(res));
  }

  render() {
    return (
      <div className="smurf-info-card">
        <form onSubmit={this.submitEdits}>
          <dl id={this.props.smurfInfo.id}>
            <dt>Name:</dt>
            <dd><label htmlFor="name">
              <input value={this.state.name} onChange={this.changeHandler} type="text" name="name" id="name" title="name" placeholder="Smurf Name" required />
            </label></dd>
            <dt>Age:</dt>
            <dd><label htmlFor="age">
              <input value={this.state.age} onChange={this.changeHandler} type="number" name="age" id="age" title="age" placeholder="Age" required />
            </label></dd>
            <dt>Height:</dt>
            <dd><label htmlFor="height">
              <input value={this.state.height} onChange={this.changeHandler} type="text" name="height" id="height" title="height" placeholder="Smurf Height" required />
            </label></dd>
          </dl>
          <button>
            {this.props.isEditing ? (
              <Loader type="ThreeDots" color="#7cc6ff" height="12" width="26" />
            ) : (
              "save smurf"
            )}</button>
            <button className="remove" onClick={this.deleteSmurf}>{this.props.isDeleteing ? (
              <Loader type="ThreeDots" color="#7cc6ff" height="12" width="26" />
            ) : (
              "kick out smurf"
            )}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isEditing: state.isEditing,
  isDeleteing: state.isDeleteing
});

export default connect( mapStateToProps, { editSmurf, deleteSmurf })(SmurfEdit);