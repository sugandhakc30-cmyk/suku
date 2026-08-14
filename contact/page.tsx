'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e: any) {
    e.preventDefault()
    // Mock submission. Replace with real email/API integration.
    setSubmitted(true)
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Sugandha Tech</h1>
      {submitted ? (
        <div className="mt-4 p-4 border rounded bg-green-50">Thank you — your message was received. (This is a mock handler.)</div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 max-w-xl">
          <label className="block">
            <span className="text-sm font-medium">Name</span>
            <input required name="name" className="mt-1 block w-full border rounded px-3 py-2" />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium">Email</span>
            <input required type="email" name="email" className="mt-1 block w-full border rounded px-3 py-2" />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium">Subject</span>
            <input required name="subject" className="mt-1 block w-full border rounded px-3 py-2" />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium">Message</span>
            <textarea required name="message" rows={6} className="mt-1 block w-full border rounded px-3 py-2"></textarea>
          </label>
          <div className="mt-4">
            <button type="submit" className="px-4 py-2 bg-brand text-white rounded">Send Message</button>
          </div>
          <p className="mt-3 text-xs text-gray-500">Note: This uses a mock submission handler. Replace with a server/API integration later.</p>
        </form>
      )}
    </div>
  )
}