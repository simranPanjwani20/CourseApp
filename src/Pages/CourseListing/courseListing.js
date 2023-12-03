import React, { useState, useEffect } from 'react';
import CourseCard from '../../Components/Course Card/courseCard';
import './courseListing.css'

const CourseComponent = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/D3PXCd/course');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course?.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course?.instructor_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 function handleenrollCourse() {
  window.location.href="/enrolled"
 }
  return (
    <div className='coursePage'>
      <h1>Course List</h1>
      <div className="headandbu">
      <div className="searchContainer">
    <input
      type="text"
      placeholder="Search for a course..."
      value={searchTerm}
      onChange={handleSearch}
    />
    </div>
      <button className="enroll-button" onClick={handleenrollCourse}>Enrolled Courses</button>

      </div>
    
    <div className="course-container">
      {searchTerm === ''
        ? courses.map(course => (
          <CourseCard id={course.id} key={course.id} desc={course.desc} label={course.label} level={course.level} price={course.price} rating={course.rating} status={course.status} duration={course.duration} courseName={course.course_name} instructorName={course.instructor_name}/>
          ))
        : filteredCourses.map(course => (
          <CourseCard id={course.id} key={course.id} desc={course.desc} label={course.label} level={course.level} price={course.price} rating={course.rating} status={course.status} duration={course.duration} courseName={course.course_name} instructorName={course.instructor_name}/>
          ))}
    </div>
  </div>
  );
};

export default CourseComponent;