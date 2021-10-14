import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import rootReducer from "./rootReducer";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
  reducer: rootReducer,
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;