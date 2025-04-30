import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Disable the button when form is submitted
    setSubmitting(true);
    // Do not prevent default; allow normal form POST to Netlify
  };

  return (
    <form
      name="booking"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded shadow"
    >
      {/* Netlify form-name field */}
      <input type="hidden" name="form-name" value="booking" />

      {/* Honeypot field (hidden) */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Date Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Date
          <input
            type="date"
            name="date"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Time Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Time
          <input
            type="time"
            name="time"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Guests Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Number of Guests
          <input
            type="number"
            name="guests"
            min="1"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Special Requests / Message
          <textarea
            name="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          ></textarea>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded ${
          submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
      >
        {submitting ? 'Submitting...' : 'Submit Booking'}
      </button>
    </form>
  );
};

export default BookingForm;
