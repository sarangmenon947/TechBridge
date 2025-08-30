import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>TechBridge</h1>
      <p>Learn Digital Skills for Free</p>
      <Link to="/course/1">Start Course</Link>
    </div>
  );
};

export default Home;
