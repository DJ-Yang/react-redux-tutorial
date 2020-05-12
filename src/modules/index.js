import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 다수의 리듀서를 하나로 합쳐줌
// index.js로 파일이름을 정하면 나중에 디렉토리 이름으로 호출 가능
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
