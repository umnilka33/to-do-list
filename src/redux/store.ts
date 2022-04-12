import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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