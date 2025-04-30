import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewMembers() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/members');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div>
            <h2>Team Members List</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {members.map(member => (
                    <div key={member._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
                        <h3>{member.name}</h3>
                        <p>Role: {member.role}</p>
                        {member.image && (
                            <img
                                src={`http://localhost:4000/uploads/${member.image}`}
                                alt={member.name}
                                style={{ width: '100px', height: '100px' }}
                            />
                        )}
                        <Link to={`/member/${member._id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewMembers;
