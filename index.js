import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const employees = [
  { name: 'Olivia', location: 'New York', company: 'ABC Corp', rating: 4.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Software Engineer' },
  { name: 'Liam', location: 'Los Angeles', company: 'XYZ Inc', rating: 3.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Project Manager' },
  { name: 'Emma', location: 'Chicago', company: 'LMN Ltd', rating: 4.2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Designer' },
  { name: 'Noah', location: 'Houston', company: 'DEF Corp', rating: 3.9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Analyst' },
  { name: 'Ava', location: 'Phoenix', company: 'GHI Inc', rating: 4.7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'HR Manager' },
  { name: 'Elijah', location: 'Philadelphia', company: 'JKL Ltd', rating: 4.3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Marketing Specialist' },
  { name: 'Sophia', location: 'San Antonio', company: 'MNO Corp', rating: 4.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Content Writer' },
  { name: 'Lucas', location: 'San Diego', company: 'PQR Inc', rating: 4.1, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Sales Manager' },
  { name: 'Amelia', location: 'Dallas', company: 'STU Ltd', rating: 3.7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Operations Manager' },
  { name: 'Mason', location: 'San Jose', company: 'VWX Corp', rating: 4.4, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Product Manager' },
  { name: 'Isabella', location: 'Austin', company: 'YZA Inc', rating: 4.9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Developer' },
  { name: 'Ethan', location: 'Jacksonville', company: 'BCD Ltd', rating: 3.6, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'System Administrator' },
  { name: 'Mia', location: 'Fort Worth', company: 'EFG Corp', rating: 4.0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Business Analyst' },
  { name: 'Logan', location: 'Columbus', company: 'HIJ Inc', rating: 3.5, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Network Engineer' },
  { name: 'Harper', location: 'Charlotte', company: 'KLM Ltd', rating: 4.6, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Data Scientist' },
  { name: 'Jackson', location: 'San Francisco', company: 'NOP Corp', rating: 4.2, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Financial Analyst' },
  { name: 'Evelyn', location: 'Indianapolis', company: 'QRS Inc', rating: 3.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'UX Designer' },
  { name: 'Aiden', location: 'Seattle', company: 'TUV Ltd', rating: 4.3, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Technical Writer' },
  { name: 'Abigail', location: 'Denver', company: 'WXY Corp', rating: 4.7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s', bio: 'Recruiter' },
  { name: 'Sebastian', location: 'Washington D.C.', company: 'ZAB Inc', rating: 4.9, img: 'https://www.shutterstock.com/image-vector/male-avatar-realistic-face-man-260nw-594032477.jpg', bio: 'Software Architect' }
];

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.map((employee, index) => (
        <div key={index} className="employee">
          <div className="employee-info">
            <img src={employee.img} alt={employee.name} />
            <div>
              <span>{employee.name}</span>
              <p>{employee.bio}</p>
            </div>
          </div>
          <span>{employee.location}</span>
          <span>{employee.company}</span>
          <span>{employee.rating}</span>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const filteredEmployees = employees.filter(employee => {
    return (
      (!selectedRating || employee.rating >= parseFloat(selectedRating)) &&
      (!selectedLocation || employee.location === selectedLocation) &&
      (!selectedCompany || employee.company === selectedCompany) &&
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="side-nav">
        <div className="filter-section">
          <h4>Filter by Rating</h4>
          <div className="radio-group">
            <label>
              <input type="radio" value="" checked={selectedRating === ''} onChange={handleRatingChange} /> All
            </label>
            <label>
              <input type="radio" value="3.5" checked={selectedRating === '3.5'} onChange={handleRatingChange} /> 3.5+
            </label>
            <label>
              <input type="radio" value="4.0" checked={selectedRating === '4.0'} onChange={handleRatingChange} /> 4.0+
            </label>
            <label>
              <input type="radio" value="4.5" checked={selectedRating === '4.5'} onChange={handleRatingChange} /> 4.5+
            </label>
            <label>
              <input type="radio" value="4.8" checked={selectedRating === '4.8'} onChange={handleRatingChange} /> 4.8+
            </label>
          </div>
        </div>
        <div className="filter-section">
          <h4>Filter by Location</h4>
          <div className="radio-group">
            <label>
              <input type="radio" value="" checked={selectedLocation === ''} onChange={handleLocationChange} /> All
            </label>
            <label>
              <input type="radio" value="New York" checked={selectedLocation === 'New York'} onChange={handleLocationChange} /> New York
            </label>
            <label>
              <input type="radio" value="Los Angeles" checked={selectedLocation === 'Los Angeles'} onChange={handleLocationChange} /> Los Angeles
            </label>
            <label>
              <input type="radio" value="Chicago" checked={selectedLocation === 'Chicago'} onChange={handleLocationChange} /> Chicago
            </label>
            <label>
              <input type="radio" value="Houston" checked={selectedLocation === 'Houston'} onChange={handleLocationChange} /> Houston
            </label>
            <label>
              <input type="radio" value="Phoenix" checked={selectedLocation === 'Phoenix'} onChange={handleLocationChange} /> Phoenix
            </label>
            <label>
              <input type="radio" value="Philadelphia" checked={selectedLocation === 'Philadelphia'} onChange={handleLocationChange} /> Philadelphia
            </label>
            <label>
              <input type="radio" value="San Antonio" checked={selectedLocation === 'San Antonio'} onChange={handleLocationChange} /> San Antonio
            </label>
            <label>
              <input type="radio" value="San Diego" checked={selectedLocation === 'San Diego'} onChange={handleLocationChange} /> San Diego
            </label>
            <label>
              <input type="radio" value="Dallas" checked={selectedLocation === 'Dallas'} onChange={handleLocationChange} /> Dallas
            </label>
            <label>
              <input type="radio" value="San Jose" checked={selectedLocation === 'San Jose'} onChange={handleLocationChange} /> San Jose
            </label>
            <label>
              <input type="radio" value="Austin" checked={selectedLocation === 'Austin'} onChange={handleLocationChange} /> Austin
            </label>
            <label>
              <input type="radio" value="Jacksonville" checked={selectedLocation === 'Jacksonville'} onChange={handleLocationChange} /> Jacksonville
            </label>
            <label>
              <input type="radio" value="Fort Worth" checked={selectedLocation === 'Fort Worth'} onChange={handleLocationChange} /> Fort Worth
            </label>
            <label>
              <input type="radio" value="Columbus" checked={selectedLocation === 'Columbus'} onChange={handleLocationChange} /> Columbus
            </label>
            <label>
              <input type="radio" value="Charlotte" checked={selectedLocation === 'Charlotte'} onChange={handleLocationChange} /> Charlotte
            </label>
            <label>
              <input type="radio" value="San Francisco" checked={selectedLocation === 'San Francisco'} onChange={handleLocationChange} /> San Francisco
            </label>
            <label>
              <input type="radio" value="Indianapolis" checked={selectedLocation === 'Indianapolis'} onChange={handleLocationChange} /> Indianapolis
            </label>
            <label>
              <input type="radio" value="Seattle" checked={selectedLocation === 'Seattle'} onChange={handleLocationChange} /> Seattle
            </label>
            <label>
              <input type="radio" value="Denver" checked={selectedLocation === 'Denver'} onChange={handleLocationChange} /> Denver
            </label>
            <label>
              <input type="radio" value="Washington D.C." checked={selectedLocation === 'Washington D.C.'} onChange={handleLocationChange} /> Washington D.C.
            </label>
          </div>
        </div>
        <div className="filter-section">
          <h4>Filter by Company</h4>
          <div className="radio-group">
            <label>
              <input type="radio" value="" checked={selectedCompany === ''} onChange={handleCompanyChange} /> All
            </label>
            <label>
              <input type="radio" value="ABC Corp" checked={selectedCompany === 'ABC Corp'} onChange={handleCompanyChange} /> ABC Corp
            </label>
            <label>
              <input type="radio" value="XYZ Inc" checked={selectedCompany === 'XYZ Inc'} onChange={handleCompanyChange} /> XYZ Inc
            </label>
            <label>
              <input type="radio" value="LMN Ltd" checked={selectedCompany === 'LMN Ltd'} onChange={handleCompanyChange} /> LMN Ltd
            </label>
            <label>
              <input type="radio" value="DEF Corp" checked={selectedCompany === 'DEF Corp'} onChange={handleCompanyChange} /> DEF Corp
            </label>
            <label>
              <input type="radio" value="GHI Inc" checked={selectedCompany === 'GHI Inc'} onChange={handleCompanyChange} /> GHI Inc
            </label>
            <label>
              <input type="radio" value="JKL Ltd" checked={selectedCompany === 'JKL Ltd'} onChange={handleCompanyChange} /> JKL Ltd
            </label>
            <label>
              <input type="radio" value="MNO Corp" checked={selectedCompany === 'MNO Corp'} onChange={handleCompanyChange} /> MNO Corp
            </label>
            <label>
              <input type="radio" value="PQR Inc" checked={selectedCompany === 'PQR Inc'} onChange={handleCompanyChange} /> PQR Inc
            </label>
            <label>
              <input type="radio" value="STU Ltd" checked={selectedCompany === 'STU Ltd'} onChange={handleCompanyChange} /> STU Ltd
            </label>
            <label>
              <input type="radio" value="VWX Corp" checked={selectedCompany === 'VWX Corp'} onChange={handleCompanyChange} /> VWX Corp
            </label>
            <label>
              <input type="radio" value="YZA Inc" checked={selectedCompany === 'YZA Inc'} onChange={handleCompanyChange} /> YZA Inc
            </label>
            <label>
              <input type="radio" value="BCD Ltd" checked={selectedCompany === 'BCD Ltd'} onChange={handleCompanyChange} /> BCD Ltd
            </label>
            <label>
              <input type="radio" value="EFG Corp" checked={selectedCompany === 'EFG Corp'} onChange={handleCompanyChange} /> EFG Corp
            </label>
            <label>
              <input type="radio" value="HIJ Inc" checked={selectedCompany === 'HIJ Inc'} onChange={handleCompanyChange} /> HIJ Inc
            </label>
            <label>
              <input type="radio" value="KLM Ltd" checked={selectedCompany === 'KLM Ltd'} onChange={handleCompanyChange} /> KLM Ltd
            </label>
            <label>
              <input type="radio" value="NOP Corp" checked={selectedCompany === 'NOP Corp'} onChange={handleCompanyChange} /> NOP Corp
            </label>
            <label>
              <input type="radio" value="QRS Inc" checked={selectedCompany === 'QRS Inc'} onChange={handleCompanyChange} /> QRS Inc
            </label>
            <label>
              <input type="radio" value="TUV Ltd" checked={selectedCompany === 'TUV Ltd'} onChange={handleCompanyChange} /> TUV Ltd
            </label>
            <label>
              <input type="radio" value="WXY Corp" checked={selectedCompany === 'WXY Corp'} onChange={handleCompanyChange} /> WXY Corp
            </label>
            <label>
              <input type="radio" value="ZAB Inc" checked={selectedCompany === 'ZAB Inc'} onChange={handleCompanyChange} /> ZAB Inc
            </label>
          </div>
        </div>
      </div>
      <div className="main-content">
        <h1 className="header">Employee Directory</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
          placeholder="Search employees by name"
        />
        <EmployeeList employees={filteredEmployees} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
