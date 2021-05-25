import { ActionNames } from "./actions";

const profilesReducer = (state, action) => {
  switch (action.type) {
    case ActionNames.SET_PROFILES: {
      return action.payload;
    }
    case ActionNames.FILTER_PROFILE_BY_NAME: {
      return state.filter((profile) => {
        const {
          name: { title, first, last },
        } = profile;
        if (
          title === action.payload ||
          first === action.payload ||
          last === action.payload
        ) {
          return profile;
        }
      });
    }
    default: {
      return state;
    }
  }
};

export { profilesReducer };
