export default function ProsCons({ pros = [], cons = [] }: { pros?: string[]; cons?: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold">What We Like</h4>
        <ul className="mt-2 space-y-1 text-sm">
          {pros.map((p, i) => <li key={i}>✓ {p}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Things to Consider</h4>
        <ul className="mt-2 space-y-1 text-sm">
          {cons.map((c, i) => <li key={i}>• {c}</li>)}
        </ul>
      </div>
    </div>
  )
}