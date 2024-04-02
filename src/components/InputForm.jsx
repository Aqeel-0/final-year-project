// InputForm.js
import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    student_id: '',
    cweek_A: '',
    Cmoth_Arate: '',
    dom: '',
    distance: '',
    transport: '',
    income: '',
    extracurricular_activity: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    onSubmit(formData)
  };

  return (
   
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <label htmlFor="student_id" className="text-gray-700 font-bold">
        Student ID:
      </label>
      <input
        type="text"
        id="student_id"
        name="student_id"
        value={formData.student_id}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="cweek_A" className="text-gray-700 font-bold">
        Current Week Attendance (1-5):
      </label>
      <input
        type="number"
        id="cweek_A"
        name="cweek_A"
        min="1"
        max="5"
        value={formData.cweek_A}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="Cmoth_Arate" className="text-gray-700 font-bold">
        Cmoth Arate:
      </label>
      <input
        type="text"
        id="Cmoth_Arate"
        name="Cmoth_Arate"
        value={formData.Cmoth_Arate}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="dom" className="text-gray-700 font-bold">
        Accommodation:
      </label>
      <select
        id="dom"
        name="dom"
        value={formData.dom}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select</option>
        <option value="House">Home</option>
        <option value="PG">PG</option>
        <option value="Flat">Flat</option>
        <option value="Hostel">Hostel</option>
      </select>
      <label htmlFor="distance" className="text-gray-700 font-bold">
        Distance (km):
      </label>
      <input
        type="number"
        id="distance"
        name="distance"
        value={formData.distance}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="transport" className="text-gray-700 font-bold">
        Transport:
      </label>
      <select
        id="transport"
        name="transport"
        value={formData.transport}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select</option>
        <option value="Bus">Bus</option>
        <option value="Walking">Walking</option>
        <option value="Car">Car</option>
        <option value="Metro">Metro</option>
        <option value="Bike">Bike</option>
      </select>
      <label htmlFor="income" className="text-gray-700 font-bold">
        Income (Monthly):
      </label>
      <input
        type="number"
        id="income"
        name="income"
        value={formData.income}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="extracurricular_activity" className="text-gray-700 font-bold">
        Extracurricular Activity (True:1, 0:False):
      </label>
      <select
        type="text"
        id="extracurricular_activity"
        name="extracurricular_activity"
        value={formData.extracurricular_activity}
        onChange={handleChange}
        
        required
        className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select</option>
        <option value="1" selected="selected">True</option>
        <option value="0" >False</option>
      </select>
      
      
      <button onSubmit= {handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Predict
      </button>
    </form>
  );
}

export default InputForm;
