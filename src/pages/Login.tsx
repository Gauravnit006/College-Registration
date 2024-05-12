import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

export const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        email: '',
        semester: '1',
        branch: 'CSE'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any action with the form data like submitting it to a server
        console.log(formData);
    };

    return (
        <div className="login-container"> {/* Apply styling to center the form */}
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label><br />
                <label>
                    Roll no.:
                    <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} />
                </label><br />
                <label>
                    Email id:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label><br />
                <label>
                    Semester:
                    <select name="semester" value={formData.semester} onChange={handleChange}>
                        {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={String(index + 1)}>{index + 1}</option>
                        ))}
                    </select>
                </label><br />
                <label>
                    Branch:
                    <select name="branch" value={formData.branch} onChange={handleChange}>
                        <option value="CSE">CSE</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Civil">Civil</option>
                        <option value="Electronics and communication">Electronics and communication</option>
                    </select>
                </label><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
