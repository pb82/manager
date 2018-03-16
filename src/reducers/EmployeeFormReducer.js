import {EMPLOYEE_UPDATE, EMPLOYEE_RESET, EMPLOYEE_CLICK} from "../actions/types";

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_RESET:
      console.log("form reset");
      return {...INITIAL_STATE};
    case EMPLOYEE_CLICK:
      return {...action.payload};
    default:
      return state;
  }
}