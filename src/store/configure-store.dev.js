import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(InitialState)
{
    return createStore(
            rootReducer,
            InitialState,
            applyMiddleware(thunk, reduxImmutableStateInvariant())
        );
}
