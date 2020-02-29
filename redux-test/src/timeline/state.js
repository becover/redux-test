import createReducer from "../common/createReducer";

const ADD = "timeline/ADD";
const REMOVE = "timeline/REMOVE";
const EDIT = "timeline/EDIT";
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = timeline => ({ type: ADD, timeline });
export const removeTimeline = timeline => ({ type: REMOVE, timeline });
export const editTimeline = timeline => ({ type: EDIT, timeline });
export const increasNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { timelines: [], nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.timelines.push(action.timeline),
  [REMOVE]: (state, action) =>
    (state.timelines = state.timelines.push(action.timeline)),
  [EDIT]: (state, action) => {
    const index = state.timelines.findIndex(
      timeline => timeline.id === action.timeline.id
    );
    if (index >= 0) {
      state.timelines[index] = action.timeline;
    }
  },
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1)
});
export default reducer;
