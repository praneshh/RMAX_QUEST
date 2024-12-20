import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export function ContactForm() {
  const { formData, handleSubmit, handleChange } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="businessName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Search for your business listing"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
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
            <select className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50">
              <option>+91</option>
            </select>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
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
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g xyz@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          rows={4}
          placeholder="Write here your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Leave us a Message
        <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}