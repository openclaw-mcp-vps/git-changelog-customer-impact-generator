import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChangelogAI — Customer-Facing Changelogs from Git Commits',
  description: 'Connect your GitHub repo, analyze commits with AI, and generate polished customer-facing changelogs automatically. Built for B2B SaaS product managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fa517fdb-038a-4142-8c12-346aa32a2d2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
