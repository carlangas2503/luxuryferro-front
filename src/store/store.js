import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

// Configura Redux DevTools Extension y compose para compatibilidad
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers() // Aplica el middleware correctamente
);

export default store;
