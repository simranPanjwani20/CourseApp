import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../../Components/accordion/accordion';
import "./courseDetail.css"
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../../Redux/enrollmentAction';
import { useSelector } from 'react-redux';

const CourseDetail = () => {
    
  const [course, setCourse] = useState(null);
  const [enroll, setEnroll] = useState(false);
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.enrolledCourses);

  function handleDashboard() {
    window.location.href="/"
  }
  const items = [
    {
      title: 'Week 1',
      content: 'this is week 1'
    },
    {
      title: 'week 2',
      content: 'This is week 2',
    },
  ];

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://retoolapi.dev/D3PXCd/course/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };
    fetchCourse();
  }, [id]);

  let labelColor = '';
  let labelTextColor = '';
  switch (course?.label) {
    case 'best seller':
      labelColor = '#0404f8';
      labelTextColor = 'rgb(171 205 231)';
      break;
    case 'most liked':
      labelColor = '#0e660e';
      labelTextColor = 'rgb(174, 235, 145)';
      break;
    case 'hots':
      labelColor = '#5b0808';
      labelTextColor = 'rgb(237 188 188)';
      break;
    case 'featured':
      labelColor = '#3c3c05';
      labelTextColor = 'rgb(235, 235, 145)';
      break;
    default:
      labelColor = 'grey'; 
      labelTextColor = 'white';
      break;
  }

  let levelTextColor = '';
  switch (course?.level) {
    case 'beginner':
      levelTextColor = 'rgb(0 150 0)';
      break;
    case 'intermediate':
      levelTextColor = '#d705f5';
      break;
    case 'advanced':
      levelTextColor = 'rgb(255 11 11)';
      break;
    default:
      levelTextColor = 'black'; 
      break;
  }

  const handleEnroll = () => {
    dispatch(enrollCourse(course));
    console.log(enrolledCourses)
    setEnroll(true)
  };

  return (
    <div className='courseDetailContainer'>
      {course ? (
        <>
        <h1>Course Details</h1>
        <button className="enroll-button" onClick={handleDashboard}>Dashboard</button>
        <div className='courdetailmaincard'>
        <div className='particularCourse'>
            <img src="https://www.soholearninghub.com/wp-content/uploads/2021/01/tips-for-taking-online-classes.jpeg" alt="" />
            <div>
          <div className="labelContainer">
      <div className="label-chip" style={{ backgroundColor: labelTextColor, color: labelColor,  }}>
        {course?.label}
      </div>
      </div>
      <div className="namep">
          <h1 className='courseName'> {course.course_name}</h1>
          <h1>  Rs {course?.price}</h1>
          </div>
      <div className="course-info">
        <p className='instructor'> <b>By:</b> {course?.instructor_name}</p>
        <p> <b>Description:</b> {course?.desc} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, magni quisquam. Officiis pariatur placeat unde exercitationem voluptatum possimus sequi qui! Nam quis impedit, perspiciatis inventore eveniet doloribus, maxime, ea aspernatur error suscipit numquam deserunt commodi ex nisi nobis dignissimos eius dolor fugiat deleniti illum vel nesciunt natus. Sunt, eveniet sit.</p>
        <p> Course Suited for  <span style={{ color: levelTextColor }}>{course?.level} learners.</span></p>
        {
            course?.level==="advanced"? <p>Pre-requisites is knowledge of essential {course?.course_name}.</p>:course?.level==="intermediate"?<p>Pre-requisites is knowledge of basic {course?.course_name}.</p>: <p>No Pre-requisites are required.</p>
        }
        
       
      </div>
          </div>
          
        </div>
        <p> <b>Rating:</b>  {course?.rating}</p>
        <div className="dulo">
        <p> <b>Duration:</b>  {course?.duration} Hours</p>
        <p> <b>Location:</b> Remote</p>
        </div>
        <p> <b>Enrollment Status:</b>  {course?.status}</p>
        <button className="enroll-button" onClick={handleEnroll}>{enroll? "Enrolled": "Enroll"}</button>
        <Accordion items={items} />
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// const mapStateToProps = state => {
//   {console.log(state)}
//   return {
//     enrolledCourses: state.enrolledCourses,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     enrollCourse: course => dispatch(enrollCourse(course)),
//   };
// };

export default CourseDetail;
