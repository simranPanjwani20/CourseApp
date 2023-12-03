
const localStorageMiddleware = store => next => action => {
    const result = next(action);
  
    localStorage.setItem('enrolledCourses', JSON.stringify(store.getState().enrolledCourses));
  
    return result;
  };
  
  export default localStorageMiddleware;
  