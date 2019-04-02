import { createStore, combineReducers } from 'redux';
import product from '../reducers/product';
import user from '../reducers/user';
import SearchFilter from '../reducers/SearchFilter';


export default () => {
  
  const store = createStore(
    combineReducers({product,user,SearchFilter})
    );
    store.subscribe(() => {
      console.log(store.getState());
    });      
  return store;
};
