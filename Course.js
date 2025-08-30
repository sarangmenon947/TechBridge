import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Course = ({ match }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`https://api.techbridge.com/courses/${match.params.id}`)
      .then(response => setCourse(response.data));
  }, [match.params.id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <ul>
        {course.lessons.map(lesson => (
          <li key={lesson.id}>{lesson.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
