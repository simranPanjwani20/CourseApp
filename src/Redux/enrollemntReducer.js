const initialState = {
    enrolledCourses: [],
  };
  
  const enrollmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ENROLL_COURSE':
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default enrollmentReducer;
  