import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { SearchBar } from './components/Home/SearchBar';
interface FormData {
  businessName: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
    <div className="max-w-2xl mx-auto mb-16 mt-10">
        <SearchBar/>
      <h1 className="text-4xl font-bold mb-2 mt-9">Get in touch with us.</h1>
      <h2 className="text-4xl font-bold  mb-8">We're here to assist you.</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Search for your business listing"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="px-3 py-2 border border-gray-300 rounded-l-lg border-r-0 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>+91</option>
              </select>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="98510 00000"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="e.g xyz@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            rows={4}
            placeholder="Write here your message..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          <MessageSquare size={20} />
          Leave us a Message
        </button>
      </form>
    </div>

    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Contact Info</h3>
          <h2 className="text-4xl font-bold mb-8">We are always happy to assist you</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4">Email Address</h4>
            <p className="text-gray-600 mb-2">Support@RMax.com</p>
            <p className="text-sm text-gray-500">
              Assistance hours:<br />
              Monday - Friday 6 am to 8 pm<br />
              EST
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Number</h4>
            <p className="text-gray-600 mb-2">+91-8657491236</p>
            <p className="text-sm text-gray-500">
              Assistance hours:<br />
              Monday - Friday 6 am to 8 pm<br />
              EST
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
    
  );
}