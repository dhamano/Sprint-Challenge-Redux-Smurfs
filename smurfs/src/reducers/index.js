/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from '../actions';

const initialState = {
  error       : "",
  smurfsList  : [],
  isFetching  : false,
  isAdding    : false,
  isEditing   : false,
  isDeleteing : false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        error     : "",
        isFetching: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        error     : "",
        smurfsList: action.payload,
        isFetching: false,
      }
    case FETCH_FAIL:
      return {
        ...state,
        error     : action.payload,
        isFetching: false,
      }
    case ADD_SMURF_START:
      return {
        ...state,
        error   : '',
        isAdding: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error   : '',
        smurfsList: action.payload,
        isAdding: false,
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error     : action.payload,
        isAdding: false,
      }
    case EDIT_SMURF_START:
      return {
        ...state,
        error   : '',
        isEditing: true,
      }
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        error   : '',
        smurfsList: action.payload,
        isEditing: false,
      }
    case EDIT_SMURF_FAIL:
      return {
        ...state,
        error     : action.payload,
        isEditing: false,
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        error   : '',
        isDeleteing: true,
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        error   : '',
        smurfsList: action.payload,
        isDeleteing: false,
      }
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        error     : action.payload,
        isDeleteing: false,
      }
    default:
      return state;
  }
}

export default reducer;