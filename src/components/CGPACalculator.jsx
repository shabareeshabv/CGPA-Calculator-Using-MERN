import React, { useState } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import './Calculator.css';

function CGPACalculator() {
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [dept, setDept] = useState('');
  const [grades, setGrades] = useState(['']);
  const [cgpa, setCgpa] = useState(null);

  const saveToDB = async (calculatedCgpa) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:5000/api/cgpa/save',
        { name, usn, department: dept, grades, cgpa: calculatedCgpa },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      alert('Error saving CGPA data.');
    }
  };

  const calculate = () => {
    const sum = grades.reduce((acc, val) => acc + parseFloat(val || 0), 0);
    const result = (sum / grades.length).toFixed(2);
    setCgpa(result);
    saveToDB(result);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(`Student Name: ${name}`, 10, 10);
    doc.text(`USN: ${usn}`, 10, 20);
    doc.text(`Department: ${dept}`, 10, 30);
    doc.text(`CGPA: ${cgpa}`, 10, 40);
    doc.save('cgpa-result.pdf');
  };

  return (
    <div className="calc-container">
      <h2>CGPA Calculator</h2>

      <input
        type="text"
        value={name}
        placeholder="Student Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={usn}
        placeholder="USN"
        onChange={(e) => setUsn(e.target.value)}
      />

      <select value={dept} onChange={(e) => setDept(e.target.value)}>
        <option value="">Select Department</option>
        <option value="Computer Science (CS)">Computer Science (CS)</option>
        <option value="Information Science (IS)">Information Science (IS)</option>
        <option value="Electronics (ECE)">Electronics (ECE)</option>
        <option value="Mechanical (ME)">Mechanical (ME)</option>
        <option value="Civil (CE)">Civil (CE)</option>
        <option value="Electrical (EEE)">Electrical (EEE)</option>
      </select>

      <hr style={{ margin: '20px 0' }} />

      {grades.map((grade, i) => (
        <input
          key={i}
          type="number"
          placeholder={`Subject ${i + 1} Grade`}
          value={grade}
          onChange={(e) => {
            const newGrades = [...grades];
            newGrades[i] = e.target.value;
            setGrades(newGrades);
          }}
        />
      ))}

      <button onClick={() => setGrades([...grades, ''])}>Add Subject</button>
      <button onClick={calculate}>Calculate</button>

      {cgpa && (
        <div>
          <h3>Your CGPA: {cgpa}</h3>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
}

export default CGPACalculator;
