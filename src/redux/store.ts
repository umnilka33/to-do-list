import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

/* eslint-disable no-underscore-dangle */
//const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))
  /*process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;*/
/* eslint-enable */

const configureStore = (preloadedState: any) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk),
  )
);

const store = configureStore({});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch