import React from 'react';

export function ContactInfo() {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        We are always happy to assist you
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">Email Address</h3>
          <p className="text-gray-600">Support@RMax.com</p>
          <p className="text-sm text-gray-500">
            Assistance hours:
            <br />
            Monday - Friday 6 am to 8 pm EST
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">Contact Number</h3>
          <p className="text-gray-600">+91-8657491236</p>
          <p className="text-sm text-gray-500">
            Assistance hours:
            <br />
            Monday - Friday 6 am to 8 pm EST
          </p>
        </div>
      </div>
    </div>
  );
}