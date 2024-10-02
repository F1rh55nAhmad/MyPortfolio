import { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    // Simulate form submission
    setSuccess('Your message has been sent successfully!');

    // Clear form fields
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row px-10">
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Contact Me</h2>
          <p className="text-lg mb-4">Feel free to reach out with any questions or comments!</p>
          <p className="text-lg mb-4">📍 Location: Islamabad </p>
          <p className="text-lg mb-4">✉️ Email: farheenahmad677@gmail.com </p>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white p-8 rounded-lg shadow-xl"
          data-aos="fade-up" // Animation for the form
          data-aos-delay="100" // Delay for the form animation
        >
          {error && (
            <p className="text-red-500 mb-4 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-500 mb-4 text-center">{success}</p>
          )}

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow text-black"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow text-black"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow text-black"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-300 text-white py-3 rounded-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 transition-all shadow-md"
            data-aos="fade-up" // Animation for the button
            data-aos-delay="200" // Delay for the button animation
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
