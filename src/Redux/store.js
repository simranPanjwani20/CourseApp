// store.js
import { legacy_createStore as createStore} from 'redux';
import enrollmentReducer from './enrollemntReducer';

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('enrolledCourses');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage:', error);
    return [];
  }
};

const saveToLocalStorage = enrolledCourses => {
  try {
    const serializedState = JSON.stringify(enrolledCourses);
    localStorage.setItem('enrolledCourses', serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

const storeEnhancer = createStore => (reducer, preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer);

  const persistedEnrolledCourses = loadFromLocalStorage();

  store.subscribe(() => {
    const { enrolledCourses } = store.getState();
    saveToLocalStorage(enrolledCourses);
  });

  return store;
};

const store = createStore(
  enrollmentReducer,
  { enrolledCourses: loadFromLocalStorage() }, 
  storeEnhancer
);

export default store;
