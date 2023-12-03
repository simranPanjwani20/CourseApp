import React from 'react';
import './CourseCard.css';

const CourseCard = ({
  id,
  desc,
  label,
  level,
  price,
  rating,
  status,
  duration,
  courseName,
  instructorName,
}) => {
  let labelColor = '';
  let labelTextColor = '';
  switch (label) {
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
  switch (level) {
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

  function handleCourseClick(id) {
    window.location.href=`/${id}`
    
  }

  return (
    <div className="course-card" onClick={()=>handleCourseClick(id)}>
      <div className="labelContainer">
      <div className="label-chip" style={{ backgroundColor: labelTextColor, color: labelColor,  }}>
        {label}
      </div>
      </div>
      <div className="course-info">
        <h2>{courseName}</h2>
        <p className='instructor'> <b>By:</b> {instructorName}</p>
        <p> <b>Description:</b> {desc}</p>
        <p> <b>Level:</b>  <span style={{ color: levelTextColor }}>{level}</span></p>
        <p> <b>Price:</b>  Rs{price}</p>
        <p> <b>Rating:</b>  {rating}</p>
        <p> <b>Status:</b>  {status}</p>
        <p> <b>Duration:</b>  {duration} Hours</p>
      </div>
    </div>
  );
};

export default CourseCard;
