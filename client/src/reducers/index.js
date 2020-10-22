import {combineReducers} from 'redux';
import blogs from './blog_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    blogs,
    user
});

export default rootReducer;