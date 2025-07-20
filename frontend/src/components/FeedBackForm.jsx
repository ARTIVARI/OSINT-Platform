import React, { useState } from 'react';
import Title from './Title';

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    feedback:'',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.occupation) newErrors.occupation = 'Occupation is required';
    if (!formData.feedback) newErrors.feedback = 'Please give the feedback';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    setSuccessMessage('Thank you for your feedback!');
    setFormData({ name: '', email: '', phone: '', occupation: '', feedback:'' ,});
    setErrors({});
  };

  return (
    <div className='flex flex-col gap-5 w-screen h-fit lg:p-10 p-3'>
      <Title title='Feedback Form' />

      
      <form className='flex flex-col justify-center items-center mt-5' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <div className='flex lg:flex-row flex-col gap-3'>
          <div >
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={formData.name} 
              onChange={handleInputChange} 
              className="p-2 rounded-md border border-[#FE5722]"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="email"
              placeholder="Email" 
              value={formData.email} 
              onChange={handleInputChange} 
              className="p-2 rounded-md border border-[#FE5722]"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          </div>
          

          <div className='flex lg:flex-row flex-col gap-3'>
          <div>
            <input 
              type="text" 
              name="phone"
              placeholder="Phone no." 
              value={formData.phone} 
              onChange={handleInputChange} 
              className="p-2 rounded-md border border-[#FE5722]"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="occupation"
              placeholder="Occupation" 
              value={formData.occupation} 
              onChange={handleInputChange} 
              className="p-2 rounded-md border border-[#FE5722]"
            />
            {errors.occupation && <p className="text-red-500">{errors.occupation}</p>}
          </div>
          </div>

          <div >
            <textarea 
              type="text" 
              name="feedback"
              placeholder="Please give feedback" 
              value={formData.feedback} 
              onChange={handleInputChange} 
              className="flex justify-start items-start p-2 rounded-md border w-full h-32 border-[#FE5722]"
            />
            {errors.name && <p className="text-red-500">{errors.feedback}</p>}
          </div>


          <button type="submit" className="mt-4 p-2 bg-[#FE5722] text-white rounded-md w-full">Submit</button>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
        
      </form>
    </div>
  );
}

export default FeedBackForm;
