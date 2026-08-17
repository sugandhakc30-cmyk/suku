
import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

const contactEmail = 'hello@sugandhatech.in.net'

export const metadata: Metadata = {
  title: 'Contact Sugandha Tech',
  description: 'Contact Sugandha Tech for product questions, feedback, editorial inquiries, and partnership opportunities.',
  alternates: { canonical: `${siteMeta().baseUrl}/contact` }
}

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-neutral-900">Contact Sugandha Tech</h1>
      <p className="mt-3 text-neutral-600">
        For product questions, feedback, editorial requests, and partnership opportunities, send a note using the form below. Your email app will open with a pre-filled message.
      </p>

      <form action={`mailto:${contactEmail}`} method="post" encType="text/plain" className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">Name</span>
          <input required name="Name" className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">Email</span>
          <input required type="email" name="Email" className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">Subject</span>
          <input required name="Subject" className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">Message</span>
          <textarea required name="Message" rows={6} className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"></textarea>
        </label>
        <div className="pt-2">
          <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700">Send Message</button>
        </div>
      </form>

      <p className="mt-4 text-sm text-neutral-500">
        Prefer direct email? <a href={`mailto:${contactEmail}`} className="font-medium text-brand-600 underline">{contactEmail}</a>
      </p>
    </div>
  )
}