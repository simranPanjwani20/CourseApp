// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseComponent from './Pages/CourseListing/courseListing';
import CourseDetail from './Pages/CourseDetails/courseDetail';
import EnrolledCourses from './Pages/EnrolledCourses/enrolledCourses';


const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<CourseComponent/>}/>
    <Route exact path="/:id" element={<CourseDetail/>}/>
    <Route exact path="/enrolled" element={<EnrolledCourses/>}/>
  </Routes>
    </Router>
  );
};

export default App;
