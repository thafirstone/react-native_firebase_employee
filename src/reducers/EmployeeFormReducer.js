import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_VIEW,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_INIT_ALL,
} from './../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '', uid: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_VIEW:
      return action.payload;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_INIT_ALL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
