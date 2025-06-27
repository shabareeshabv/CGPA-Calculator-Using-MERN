import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the CGPA Calculator</h1>
      <section className="info-section">
        <h2>What is CGPA?</h2>
        <p>CGPA stands for Cumulative Grade Point Average. It measures academic performance over time by averaging the grades of all subjects taken in a course.</p>
      </section>
      <section className="info-section">
        <h2>Why CGPA Matters?</h2>
        <p>CGPA plays a crucial role in placements, higher studies, and scholarships. A good CGPA reflects consistent academic performance.</p>
      </section>
      <section className="info-section">
        <h2>Features</h2>
        <ul>
          <li>Secure Login and Signup</li>
          <li>Enter and Save Semester Grades</li>
          <li>Download Results as PDF</li>
          <li>Easy-to-Use Interface</li>
        </ul>
      </section>
      <section className="info-section">
        <h2>How to Use?</h2>
        <ol>
          <li>Login or Signup</li>
          <li>Go to Calculator</li>
          <li>Enter your grades and calculate CGPA</li>
          <li>Download a PDF or save it to your account</li>
        </ol>
      </section>
    </div>
  );
}
export default Home;
