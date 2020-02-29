import { createStore, combineReducers } from 'redux';
import timelineReducer, { 
  addTimeline, 
  removeTimeline, 
  editTimeline, 
  increaseNextPage
} from './timeline/state';

import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from './friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend:friendReducer,
});
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: '리덕스 너무 어려웡'}));
store.dispatch(addTimeline({ id:2, desc: '꾸에에엥 ㅠㅠ'0}));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '리덕스는 너무너무 어려웡 힝구힝구'}));
store.dispatch(removeTimeline({ id: 1, desc: '리덕스 너무 어려웡'}));

store.dispatch(addFriend({ id: 1,  name: '아이쿠'}));
store.dispatch(addFriend({ id: 2, name: '낙지'}));
store.dispatch(editFriend({ id: 2, name: '수지'}));
store.dispatch(removeFriend({ id: 1, name: '아이쿠'}));