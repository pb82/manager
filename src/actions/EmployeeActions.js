import {EMPLOYEE_UPDATE, NAVIGATE, EMPLOYEE_RESET, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_CLICK} from "./types";
import firebase from 'firebase';

export const createPressed = () => {
  return (dispatch) => {
    dispatch({type: EMPLOYEE_RESET});
    dispatch({
      type: NAVIGATE,
      payload: {
        route: 'Create',
        enableBack: true
      }
    });
  };
};

export const employeeEdit = (employee) => {
  return (dispatch) => {
    dispatch({type: EMPLOYEE_CLICK, payload: employee});
    dispatch({
      type: NAVIGATE,
      payload: {
        route: 'Edit',
        enableBack: true
      }
    });
  };
};

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEE_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_RESET});
        dispatch({
          type: NAVIGATE,
          payload: {
            route: 'List',
            enableBack: false
          }
        });
      });
  };
};

export const employeeSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_RESET});
        dispatch({
          type: NAVIGATE,
          payload: {
            route: 'List',
            enableBack: false
          }
        });
      });
  };
};

export const employeeDelete = ({uid}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({type: EMPLOYEE_RESET});
        dispatch({
          type: NAVIGATE,
          payload: {
            route: 'List',
            enableBack: false
          }
        });
      });
  };
};