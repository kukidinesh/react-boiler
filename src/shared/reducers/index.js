import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import example, {reducer1} from './example';
import homeReducer from './home'





const allReducers = combineReducers({
    // add your reducers here
   // routing: routerReducer,
    example,
    reducer1,
    homeReducer,
});

export default allReducers;
