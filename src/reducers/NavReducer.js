import Router from '../Router';
import {NavigationActions} from 'react-navigation';
import {NAVIGATE} from "../actions/types";

const initialState = Router.router.getStateForAction(NavigationActions.init());

const wrap = (action, enableBack) => {
  if (enableBack) {
    return action;
  }

  return NavigationActions.reset({
    index: 0, actions: [
      action
    ]
  });
};

const navReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case NAVIGATE:
      const navAction = NavigationActions.navigate({routeName: action.payload.route});
      nextState = Router.router.getStateForAction(
        wrap(navAction, action.payload.enableBack),
        state
      );
      break;
    default:
      nextState = Router.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;