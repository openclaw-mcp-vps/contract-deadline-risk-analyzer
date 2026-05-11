import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Deadline Risk Analyzer',
  description: 'Analyze contract deadlines for delivery risk. AI-powered risk assessment for project managers, legal teams, and consultants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ecf5ffdf-5be3-40ea-bc20-963a0df2d0d7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
