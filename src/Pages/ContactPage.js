import React, { useState } from 'react';

const ContactPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the feedback to your server or handle it as needed.
    console.log(feedback);
  };

  return (
    <div className="bg-lilac min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-lilac mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-black text-lg mb-4 ">Your feedback is important to us</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              value={feedback}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-lilac focus:border-lilac text-gray-700"
              placeholder="Enter your feedback here"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-lilac text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
