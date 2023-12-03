import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../../Components/Course Card/courseCard';
import './enrollcourse.css'
const EnrolledCoursesPage = () => {
    const enrolledCourses = useSelector(state => state.enrolledCourses);
    console.log(enrolledCourses)
    useEffect(() => {
    }, [enrolledCourses])
    
    function handleDashboard() {
        window.location.href="/"
    }
  return (
    <div className='courseenroll'>
      <h1>Enrolled Courses</h1>
      <button className="enroll-button" onClick={handleDashboard}>Dashboard</button>
      <div className='enrollcont'>
        {enrolledCourses?.map((course, index) => (
          <CourseCard id={course.id} key={index} desc={course.desc} label={course.label} level={course.level} price={course.price} rating={course.rating} status={course.status} duration={course.duration} courseName={course.course_name} instructorName={course.instructor_name}/>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    enrolledCourses: state.enrolledCourses,
  };
};

export default EnrolledCoursesPage;
