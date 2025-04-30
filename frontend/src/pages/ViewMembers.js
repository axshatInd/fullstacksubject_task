import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewMembers() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/members');
            setMembers(response.data);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this member?')) return;
        try {
            await axios.delete(`http://localhost:4000/api/members/${id}`);
            setMembers(members.filter(member => member._id !== id));
        } catch (error) {
            alert('Error deleting member');
            console.error(error);
        }
    };

    return (
        <div>
            <h2 style={{
                color: "#fff",
                textAlign: "center",
                marginTop: "32px",
                marginBottom: "32px",
                fontWeight: "bold"
            }}>
                Team Members List
            </h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '32px'
            }}>
                {members.map(member => (
                    <div
                        key={member._id}
                        style={{
                            border: '1px solid #444',
                            borderRadius: '12px',
                            padding: '20px',
                            width: '220px',
                            background: '#181a1b',
                            color: '#fff',
                            textAlign: 'center',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.45)'
                        }}
                    >
                        <h3 style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>{member.name}</h3>
                        <p style={{ margin: '0 0 12px 0', color: "#f1f1f1" }}>
                            Role: <span style={{ color: "#b3b3b3" }}>{member.role || "N/A"}</span>
                        </p>
                        {member.image && (
                            <img
                                src={`http://localhost:4000/uploads/${member.image}`}
                                alt={member.name}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    borderRadius: '6px',
                                    marginBottom: '12px'
                                }}
                            />
                        )}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '12px'
                        }}>
                            <Link to={`/member/${member._id}`}>
                                <button
                                    style={{
                                        backgroundColor: '#3a6ee8',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '8px 14px',
                                        fontSize: '15px',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    View Details
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(member._id)}
                                style={{
                                    backgroundColor: '#e84545',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '8px 14px',
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewMembers;
