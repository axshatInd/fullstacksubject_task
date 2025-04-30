import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/members/${id}`);
        setMember(response.data);
      } catch (error) {
        console.error('Error fetching member details:', error);
      }
    };
    fetchMember();
  }, [id]);

  if (!member) return <div>Loading...</div>;

  return (
    <div>
      <h2>Member Details</h2>
      <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
        <p><strong>Name:</strong> {member.name}</p>
        <p><strong>Roll Number:</strong> {member.rollNumber}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>Degree:</strong> {member.degree}</p>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Contact:</strong> {member.contact}</p>
        <p><strong>About Project:</strong> {member.aboutProject}</p>
        <p><strong>Hobbies:</strong> {member.hobbies}</p>
        <p><strong>Certificate:</strong> {member.certificate}</p>
        <p><strong>Internship:</strong> {member.internship}</p>
        <p><strong>Aim:</strong> {member.aim}</p>
        {member.image && (
          <img
            src={`http://localhost:4000/uploads/${member.image}`}
            alt={member.name}
            style={{ width: '200px', height: '200px' }}
          />
        )}
      </div>
    </div>
  );
}

export default MemberDetails;
