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
        const lowerCasePayload = action.payload.toLowerCase();
        if (
          title.toLowerCase().indexOf(lowerCasePayload) >= 0 ||
          first.toLowerCase().indexOf(lowerCasePayload) >= 0 ||
          last.toLowerCase().indexOf(lowerCasePayload) >= 0
        ) {
          return profile;
        }
      });
    }
    case ActionNames.SORT_PROFILES: {
      if (!action.payload) return state;

      const stateToSort = [...state];
      const sortCriteria = action.payload;

      stateToSort.sort((a, b) =>
        ("" + a["name"][sortCriteria]).localeCompare(
          "" + b["name"][sortCriteria]
        )
      );

      return stateToSort;
    }
    default: {
      return state;
    }
  }
};

export { profilesReducer };
