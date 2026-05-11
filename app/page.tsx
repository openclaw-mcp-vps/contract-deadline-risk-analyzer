export default function Home() {
  const faqs = [
    {
      q: 'What file formats are supported?',
      a: 'The analyzer supports PDF and DOCX contract files. Simply upload your document and the AI extracts all deadline and milestone information automatically.'
    },
    {
      q: 'How does the risk scoring work?',
      a: 'Our AI compares extracted deadlines against industry benchmarks and historical delivery data to produce a risk score from Low to Critical, with actionable mitigation suggestions.'
    },
    {
      q: 'Is my contract data kept private?',
      a: 'Yes. Documents are processed in isolated sessions and never stored or used for training. Your contract data remains confidential at all times.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Legal Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Spot Unrealistic Deadlines<br />
          <span className="text-[#58a6ff]">Before They Become Liabilities</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload a contract and get an instant AI risk report — identifying tight deadlines, flagging delivery risks, and suggesting mitigation strategies.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Analyzing — $18/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for trial &bull; Cancel anytime</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📄', title: 'Upload Contract', desc: 'PDF or DOCX — drag and drop or browse' },
            { icon: '🤖', title: 'AI Extracts Deadlines', desc: 'Every milestone and due date identified' },
            { icon: '📊', title: 'Get Risk Report', desc: 'Scored risks with mitigation suggestions' }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{title}</div>
              <div className="text-xs text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your projects</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'Unlimited contract uploads',
              'AI deadline extraction (PDF & DOCX)',
              'Risk scoring & severity flags',
              'Mitigation recommendation reports',
              'Export reports as PDF',
              'Priority email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Contract Deadline Risk Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
