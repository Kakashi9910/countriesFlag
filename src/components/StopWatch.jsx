import React, { useState } from "react";

const DisplayName = () => {
  // Combine form data into a single state object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // Handle input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          required
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          required
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      {submitted && (
        <p>Full Name: {formData.firstName} {formData.lastName}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DisplayName;
