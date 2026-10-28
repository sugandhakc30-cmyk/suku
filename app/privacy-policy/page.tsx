import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sugandha Tech',
  description: 'Privacy policy covering cookies, analytics, forms and affiliate links.',
  alternates: { canonical: `${siteMeta().baseUrl}/privacy-policy` }
}

export default function PrivacyPolicy() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="mt-4">Privacy Policy for Sugandha Tech

At Sugandha Tech (sugandhatech.in.net), the privacy of our visitors is of extreme importance to us. This Privacy Policy outlines the types of personal information received and collected by Sugandha Tech and how it is used.

1. Information We Collect
We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us. We also automatically collect certain technical data when you visit our website, including your IP address, browser type, device information, and pages viewed.

2. Cookies and Tracking Technologies
Sugandha Tech uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and deliver customized content. 

3. Google AdSense and Third-Party Advertising
- Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.
- Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
- Users may opt out of personalized advertising by visiting Google Ads Settings (https://www.google.com/settings/ads). Alternatively, you can opt out of third-party vendor use of cookies for personalized advertising by visiting www.aboutads.info.

4. Affiliate Links Disclosure
Sugandha Tech participates in affiliate marketing programs. Some articles contain affiliate links, which means we may earn a small commission if you click through and make a purchase, at no additional cost to you.

5. Data Security & Contact Information
We take reasonable measures to protect your personal information against unauthorized access or alteration. If you have any questions or concerns regarding this Privacy Policy, please contact us at support@sugandhatech.in.net..</p>
    </div>
  )
}