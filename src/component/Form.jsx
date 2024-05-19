import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid';
import { usercontext } from '../context/UserContext';

const Form = () => {
  const [users,setusers] = useContext(usercontext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setusers([...users, formData])
    localStorage.setItem('Users', JSON.stringify([...users, formData]));
    setFormData({
      name: '',
      email: '',
      mobile: '',
    })
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      id: nanoid()
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-800 rounded-lg shadow-lg shadow-zinc-950">
      <h2 className="text-xl font-semibold mb-4 text-zinc-200">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-zinc-200">
          <label htmlFor="name" className="block text-sm font-medium text-zinc-200 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder='Full Name'
            onChange={handleChange}
            className="border bg-[transparent] text-zinc-200 border-zinc-700 rounded-md w-full px-3 py-2 focus:outline-none focus:border-zinc-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            className="border text-zinc-200 bg-[transparent] border-zinc-700 rounded-md w-full px-3 py-2 focus:outline-none focus:border-zinc-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-zinc-200 mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            placeholder='Mobile Number'
            onChange={handleChange}
            className="border text-zinc-200 bg-[transparent] border-zinc-700 rounded-md w-full px-3 py-2 focus:outline-none focus:border-zinc-100"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form