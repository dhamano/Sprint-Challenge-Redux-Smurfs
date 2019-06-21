/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

const baseURL = "//localhost:3333";

export const FETCH_START    = "FETCH_START";
export const FETCH_SUCCESS  = "FETCH_SUCCESS";
export const FETCH_FAIL     = "FETCH_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios.get(`${baseURL}/smurfs`)
    .then(res => {
      dispatch({
        type    : FETCH_SUCCESS,
        payload : res.data
      })
    })
    .catch(err => {
      dispatch({
        type    : FETCH_FAIL,
        payload : err.response
      })
    });
}

export const ADD_SMURF_START    = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS  = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL     = "ADD_SMURF_FAIL";

export const addSmurf = smurfInfo => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  return axios.post(`${baseURL}/smurfs`, smurfInfo)
    .then(res => {
      dispatch({
        type    : ADD_SMURF_SUCCESS,
        payload : res.data
      })
      return true;
    })
    .catch(err => console.log(err));
}

export const EDIT_SMURF_START    = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS  = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAIL     = "EDIT_SMURF_FAIL";

export const editSmurf = smurfInfo => dispatch => {
  dispatch({ type: EDIT_SMURF_START });
  return axios.put(`${baseURL}/smurfs/${smurfInfo.id}`, smurfInfo)
    .then(res => {
      dispatch({
        type    : EDIT_SMURF_SUCCESS,
        payload : res.data
      })
      return true;
    })
    .catch(err => console.log(err));
}