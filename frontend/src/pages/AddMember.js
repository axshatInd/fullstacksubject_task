import React, { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    role: '',
    email: '',
    contact: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: ''
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (file) data.append('image', file);

    try {
      await axios.post('http://localhost:4000/api/members', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Member added successfully!');
      setFormData({
        name: '',
        rollNumber: '',
        year: '',
        degree: '',
        role: '',
        email: '',
        contact: '',
        aboutProject: '',
        hobbies: '',
        certificate: '',
        internship: '',
        aim: ''
      });
      setFile(null);
    } catch (error) {
      setMessage('Error adding member: ' + error.message);
    }
  };

  return (
    <div className="form-outer">
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required />
        <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
        <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleChange} required />
        <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
        <textarea
          name="aboutProject"
          placeholder="About Project"
          value={formData.aboutProject}
          onChange={handleChange}
          className="textarea-large"
        />
        <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" value={formData.hobbies} onChange={handleChange} />
        <textarea
          name="certificate"
          placeholder="Certificate"
          value={formData.certificate}
          onChange={handleChange}
          className="textarea-medium"
        />
        <textarea
          name="internship"
          placeholder="Internship"
          value={formData.internship}
          onChange={handleChange}
          className="textarea-medium"
        />
        <textarea
          name="aim"
          placeholder="About Your Aim"
          value={formData.aim}
          onChange={handleChange}
          className="textarea-medium"
        />
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddMember;
