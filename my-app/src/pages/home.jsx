import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from '../components/ui/button';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg rounded-2xl">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Home;
