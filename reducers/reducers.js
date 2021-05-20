import { ActionNames } from "./actions";

const profilesReducer = (state, action) => {
  switch (action.type) {
    case ActionNames.SET_PROFILES:
      return action.payload;
    default:
      return state;
  }
};

export { profilesReducer };
