type Props = {
  bestFor?: string
  keyStrength?: string
  mainConsideration?: string
  overallVerdict?: string
}

export default function ReviewSummary({ bestFor, keyStrength, mainConsideration, overallVerdict }: Props) {
  return (
    <aside className="border rounded p-4 bg-gray-50">
      <h3 className="font-semibold mb-2">Quick Verdict</h3>
      <dl className="text-sm">
        <dt className="font-medium">Best For</dt>
        <dd className="mb-2">{bestFor || 'General users'}</dd>
        <dt className="font-medium">Key Strength</dt>
        <dd className="mb-2">{keyStrength || 'Solid performance'}</dd>
        <dt className="font-medium">Main Consideration</dt>
        <dd className="mb-2">{mainConsideration || 'Price'}</dd>
        <dt className="font-medium">Overall Verdict</dt>
        <dd className="mb-2">{overallVerdict || 'A strong option for many buyers'}</dd>
      </dl>
    </aside>
  )
}