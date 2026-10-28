import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Terms and Conditions — Sugandha Tech',
  description: 'Terms and conditions for using Sugandha Tech.',
  alternates: { canonical: `${siteMeta().baseUrl}/terms` }
}

export default function Terms() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Terms and Conditions</h1>
      <p className="mt-4">Terms and Conditions for Sugandha Tech

Last updated: October 2026

Welcome to Sugandha Tech (sugandhatech.in.net). By accessing or using our website, you agree to be bound by these Terms and Conditions.

1. Intellectual Property Rights
All content published on Sugandha Tech—including articles, software reviews, buying guides, graphics, logos, and website design—is the intellectual property of Sugandha Tech unless otherwise specified. You may not reproduce, distribute, or copy content without prior written permission.

2. Content and Advice Disclaimer
The information provided on Sugandha Tech is for general informational and educational purposes only. While we strive to present accurate, up-to-date information, we make no warranties or guarantees regarding the completeness or accuracy of any technology reviews or recommendations.

3. Affiliate Disclosure
Sugandha Tech participates in affiliate marketing programs. Some links on this website are affiliate links. If you click through and complete a purchase, we may earn a small commission at no extra cost to you.

4. Limitation of Liability
Sugandha Tech shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or reliance on any information provided herein.

5. External Links
Our site may contain links to external third-party websites. We have no control over the content, privacy policies, or practices of any third-party sites and assume no responsibility for them.

6. Contact Us
If you have any questions regarding these Terms and Conditions, please contact us at support@sugandhatech.in.net..</p>
    </div>
  )
}