import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Cookie Policy — Sugandha Tech',
  description: 'Cookie policy and how visitors can manage cookies.',
  alternates: { canonical: `${siteMeta().baseUrl}/cookie-policy` }
}

export default function CookiePolicy() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Cookie Policy</h1>
      <p className="mt-4">Cookie Policy for Sugandha Tech

Last updated: October 2026

Sugandha Tech ("we," "our," or "us") uses cookies and similar tracking technologies on sugandhatech.in.net to improve your browsing experience, analyze site traffic, and deliver relevant content and advertisements.

1. What Are Cookies?
Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the website recognize your device and remember key preferences or settings over time.

2. Types of Cookies We Use
- Essential Cookies: Necessary for the website to function properly, enabling core features such as site security and network management.
- Analytics & Performance Cookies: Help us understand how visitors interact with our content, identifying popular pages and improving website performance.
- Advertising & Third-Party Cookies: Third-party vendors (such as Google AdSense) use cookies to serve ads based on your prior visits to our site or other websites on the internet.

3. Managing and Disabling Cookies
You can control or delete cookies through your web browser settings at any time. Most browsers allow you to block cookies or alert you when a cookie is being set. Please note that disabling cookies may affect certain functionality on our website.

4. Contact Us
If you have questions about our use of cookies, please contact us at support@sugandhatech.in.net..</p>
    </div>
  )
}