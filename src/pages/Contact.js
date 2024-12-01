import React, { useState } from "react";

// Get in touch with me

const Contact = () => {
  // State Variables

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Input change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check if name is entered

    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    // Check if email is valid

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    // Check if message is entered

    if (!formData.message) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Log form data only in non-production environments for debugging purposes

      if (process.env.NODE_ENV !== "production") {
        console.log("Form submitted:", formData);
      }
     
      alert("Form successfully submitted!"); 
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() =>
              !formData.name && setErrors({ ...errors, name: "Name is required" })
            }
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => {
              if (!formData.email) {
                setErrors({ ...errors, email: "Email is required" });
              } else if (!validateEmail(formData.email)) {
                setErrors({ ...errors, email: "Invalid email address" });
              }
            }}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={() =>
              !formData.message && setErrors({ ...errors, message: "Message is required" })
            }
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
